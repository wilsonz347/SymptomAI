import os
from dotenv import load_dotenv
load_dotenv()
API_KEY = os.getenv("OPENAI_API_KEY")

import re
import json
from openai import OpenAI

def _extract_json(text: str) -> str | None:
    text = re.sub(r"```(?:json)?\s*", "", text, flags=re.IGNORECASE)
    text = re.sub(r"\s*```", "", text)
    m = re.search(r"\{.*\}", text, flags=re.DOTALL)
    return m.group(0).strip() if m else None


class DiseaseAdvisor:
    def __init__(self, api_key: str = None, model: str = "gpt-4o-mini"):
        self.client = OpenAI(api_key=api_key) if api_key else OpenAI()
        self.model = model

    def assess_multiple(self, diseases):
        """
        Takes a list of disease names (ideally 3) and returns severity/actions for each.
        """
        if isinstance(diseases, str):
            diseases = [d.strip() for d in diseases.split(",")]

        prompt = (
            "You are a concise medical triage assistant. "
            "For each disease in the given list, return its severity and recommended actions. "
            "Respond ONLY in JSON format as shown below — no markdown, no commentary.\n\n"
            "Format:\n"
            "{\n"
            '  "Disease Name": {\n'
            '    "severity": "mild | moderate | severe | critical",\n'
            '    "actions": ["short actionable steps (max 4)"]\n'
            "  },\n"
            '  "Next Disease": {...},\n'
            '  "Third Disease": {...}\n'
            "}\n\n"
            f"Diseases: {', '.join(diseases)}"
        )

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.2,
            max_tokens=300
        )

        text = response.choices[0].message.content.strip()
        json_text = _extract_json(text) or text

        try:
            result = json.loads(json_text)
        except json.JSONDecodeError:
            result = {"error": "failed to parse model output", "raw": text}

        return result
