import os
from dotenv import load_dotenv
import re
import json
from openai import OpenAI
load_dotenv()
API_KEY = os.getenv("API_KEY")

def _extract_json(text: str) -> str | None:
    """
    Return the first {...} JSON object found in text.
    Handles Markdown fences like ```json ... ``` and stray text.
    """
    # Remove triple/backtick fences
    text = re.sub(r"```(?:json)?\s*", "", text, flags=re.IGNORECASE)
    text = re.sub(r"\s*```", "", text)
    # Find the first JSON object (braces matching) using a simple stack parser
    start = None
    stack = 0
    for i, ch in enumerate(text):
        if ch == "{":
            if start is None:
                start = i
            stack += 1
        elif ch == "}":
            if stack > 0:
                stack -= 1
                if stack == 0 and start is not None:
                    candidate = text[start:i+1]
                    return candidate.strip()
    # fallback: try to find any bracketed content
    m = re.search(r"\{.*\}", text, flags=re.DOTALL)
    return m.group(0).strip() if m else None

class DiseaseAdvisor:
    def __init__(self, api_key: str = None, model: str = "gpt-4o-mini"):
        # If you prefer env var: OpenAI() will pick OPENAI_API_KEY automatically
        self.client = OpenAI(api_key=api_key) if api_key else OpenAI()
        self.model = model

    def assess(self, disease_name: str):
        prompt = (
            "You are a medical triage assistant. "
            "Respond ONLY with a single JSON object and nothing else. "
            "Do NOT include explanations or markdown. "
            "Format:\n"
            "{\n"
            '  "severity": "mild" | "moderate" | "severe" | "critical",\n'
            '  "actions": ["short action 1", "action 2"...]\n'
            "}\n\n"
            f"Disease: \"{disease_name}\""
        )

        resp = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.0,
            max_tokens=150,
        )

        text = resp.choices[0].message.content.strip()

        # Attempt to extract JSON even if wrapped in markdown/code
        json_text = _extract_json(text) or text

        try:
            result = json.loads(json_text)
        except json.JSONDecodeError:
            # Last-resort fallback: return the raw text as an action so you can see what failed
            result = {"severity": "unknown", "actions": [text]}

        # Optional: normalize keys/values
        if "severity" in result and isinstance(result["severity"], str):
            result["severity"] = result["severity"].lower()

        return result