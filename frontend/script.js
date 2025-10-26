const symptoms = [
    { id: 0, name: "anxiety and nervousness" },
    { id: 1, name: "depression" },
    { id: 2, name: "shortness of breath" },
    { id: 3, name: "depressive or psychotic symptoms" },
    { id: 4, name: "sharp chest pain" },
    { id: 5, name: "dizziness" },
    { id: 6, name: "insomnia" },
    { id: 7, name: "abnormal involuntary movements" },
    { id: 8, name: "chest tightness" },
    { id: 9, name: "palpitations" },
    { id: 10, name: "irregular heartbeat" },
    { id: 11, name: "breathing fast" },
    { id: 12, name: "hoarse voice" },
    { id: 13, name: "sore throat" },
    { id: 14, name: "difficulty speaking" },
    { id: 15, name: "cough" },
    { id: 16, name: "nasal congestion" },
    { id: 17, name: "throat swelling" },
    { id: 18, name: "diminished hearing" },
    { id: 19, name: "lump in throat" },
    { id: 20, name: "throat feels tight" },
    { id: 21, name: "difficulty in swallowing" },
    { id: 22, name: "skin swelling" },
    { id: 23, name: "retention of urine" },
    { id: 24, name: "groin mass" },
    { id: 25, name: "leg pain" },
    { id: 26, name: "hip pain" },
    { id: 27, name: "suprapubic pain" },
    { id: 28, name: "blood in stool" },
    { id: 29, name: "lack of growth" },
    { id: 30, name: "emotional symptoms" },
    { id: 31, name: "elbow weakness" },
    { id: 32, name: "back weakness" },
    { id: 33, name: "symptoms of the scrotum and testes" },
    { id: 34, name: "swelling of scrotum" },
    { id: 35, name: "pain in testicles" },
    { id: 36, name: "flatulence" },
    { id: 37, name: "pus draining from ear" },
    { id: 38, name: "jaundice" },
    { id: 39, name: "mass in scrotum" },
    { id: 40, name: "white discharge from eye" },
    { id: 41, name: "irritable infant" },
    { id: 42, name: "abusing alcohol" },
    { id: 43, name: "fainting" },
    { id: 44, name: "hostile behavior" },
    { id: 45, name: "drug abuse" },
    { id: 46, name: "sharp abdominal pain" },
    { id: 47, name: "feeling ill" },
    { id: 48, name: "vomiting" },
    { id: 49, name: "headache" },
    { id: 50, name: "nausea" },
    { id: 51, name: "diarrhea" },
    { id: 52, name: "vaginal itching" },
    { id: 53, name: "vaginal dryness" },
    { id: 54, name: "painful urination" },
    { id: 55, name: "involuntary urination" },
    { id: 56, name: "pain during intercourse" },
    { id: 57, name: "frequent urination" },
    { id: 58, name: "lower abdominal pain" },
    { id: 59, name: "vaginal discharge" },
    { id: 60, name: "blood in urine" },
    { id: 61, name: "hot flashes" },
    { id: 62, name: "intermenstrual bleeding" },
    { id: 63, name: "hand or finger pain" },
    { id: 64, name: "wrist pain" },
    { id: 65, name: "hand or finger swelling" },
    { id: 66, name: "arm pain" },
    { id: 67, name: "wrist swelling" },
    { id: 68, name: "arm stiffness or tightness" },
    { id: 69, name: "arm swelling" },
    { id: 70, name: "hand or finger stiffness or tightness" },
    { id: 71, name: "wrist stiffness or tightness" },
    { id: 72, name: "lip swelling" },
    { id: 73, name: "toothache" },
    { id: 74, name: "abnormal appearing skin" },
    { id: 75, name: "skin lesion" },
    { id: 76, name: "acne or pimples" },
    { id: 77, name: "dry lips" },
    { id: 78, name: "facial pain" },
    { id: 79, name: "mouth ulcer" },
    { id: 80, name: "skin growth" },
    { id: 81, name: "eye deviation" },
    { id: 82, name: "diminished vision" },
    { id: 83, name: "double vision" },
    { id: 84, name: "cross-eyed" },
    { id: 85, name: "symptoms of eye" },
    { id: 86, name: "pain in eye" },
    { id: 87, name: "eye moves abnormally" },
    { id: 88, name: "abnormal movement of eyelid" },
    { id: 89, name: "foreign body sensation in eye" },
    { id: 90, name: "irregular appearing scalp" },
    { id: 91, name: "swollen lymph nodes" },
    { id: 92, name: "back pain" },
    { id: 93, name: "neck pain" },
    { id: 94, name: "low back pain" },
    { id: 95, name: "pain of the anus" },
    { id: 96, name: "pain during pregnancy" },
    { id: 97, name: "pelvic pain" },
    { id: 98, name: "impotence" },
    { id: 99, name: "infant spitting up" },
    { id: 100, name: "vomiting blood" },
    { id: 101, name: "regurgitation" },
    { id: 102, name: "burning abdominal pain" },
    { id: 103, name: "restlessness" },
    { id: 104, name: "symptoms of infants" },
    { id: 105, name: "wheezing" },
    { id: 106, name: "peripheral edema" },
    { id: 107, name: "neck mass" },
    { id: 108, name: "ear pain" },
    { id: 109, name: "jaw swelling" },
    { id: 110, name: "mouth dryness" },
    { id: 111, name: "neck swelling" },
    { id: 112, name: "knee pain" },
    { id: 113, name: "foot or toe pain" },
    { id: 114, name: "bowlegged or knock-kneed" },
    { id: 115, name: "ankle pain" },
    { id: 116, name: "bones are painful" },
    { id: 117, name: "knee weakness" },
    { id: 118, name: "elbow pain" },
    { id: 119, name: "knee swelling" },
    { id: 120, name: "skin moles" },
    { id: 121, name: "knee lump or mass" },
    { id: 122, name: "weight gain" },
    { id: 123, name: "problems with movement" },
    { id: 124, name: "knee stiffness or tightness" },
    { id: 125, name: "leg swelling" },
    { id: 126, name: "foot or toe swelling" },
    { id: 127, name: "heartburn" },
    { id: 128, name: "smoking problems" },
    { id: 129, name: "muscle pain" },
    { id: 130, name: "infant feeding problem" },
    { id: 131, name: "recent weight loss" },
    { id: 132, name: "problems with shape or size of breast" },
    { id: 133, name: "difficulty eating" },
    { id: 134, name: "scanty menstrual flow" },
    { id: 135, name: "vaginal pain" },
    { id: 136, name: "vaginal redness" },
    { id: 137, name: "vulvar irritation" },
    { id: 138, name: "weakness" },
    { id: 139, name: "decreased heart rate" },
    { id: 140, name: "increased heart rate" },
    { id: 141, name: "bleeding or discharge from nipple" },
    { id: 142, name: "ringing in ear" },
    { id: 143, name: "plugged feeling in ear" },
    { id: 144, name: "itchy ear(s)" },
    { id: 145, name: "frontal headache" },
    { id: 146, name: "fluid in ear" },
    { id: 147, name: "neck stiffness or tightness" },
    { id: 148, name: "spots or clouds in vision" },
    { id: 149, name: "eye redness" },
    { id: 150, name: "lacrimation" },
    { id: 151, name: "itchiness of eye" },
    { id: 152, name: "blindness" },
    { id: 153, name: "eye burns or stings" },
    { id: 154, name: "itchy eyelid" },
    { id: 155, name: "feeling cold" },
    { id: 156, name: "decreased appetite" },
    { id: 157, name: "excessive appetite" },
    { id: 158, name: "excessive anger" },
    { id: 159, name: "loss of sensation" },
    { id: 160, name: "focal weakness" },
    { id: 161, name: "slurring words" },
    { id: 162, name: "symptoms of the face" },
    { id: 163, name: "disturbance of memory" },
    { id: 164, name: "paresthesia" },
    { id: 165, name: "side pain" },
    { id: 166, name: "fever" },
    { id: 167, name: "shoulder pain" },
    { id: 168, name: "shoulder stiffness or tightness" },
    { id: 169, name: "shoulder weakness" },
    { id: 170, name: "shoulder swelling" },
    { id: 171, name: "tongue lesions" },
    { id: 172, name: "leg cramps or spasms" },
    { id: 173, name: "ache all over" },
    { id: 174, name: "lower body pain" },
    { id: 175, name: "problems during pregnancy" },
    { id: 176, name: "spotting or bleeding during pregnancy" },
    { id: 177, name: "cramps and spasms" },
    { id: 178, name: "upper abdominal pain" },
    { id: 179, name: "stomach bloating" },
    { id: 180, name: "changes in stool appearance" },
    { id: 181, name: "unusual color or odor to urine" },
    { id: 182, name: "kidney mass" },
    { id: 183, name: "swollen abdomen" },
    { id: 184, name: "symptoms of prostate" },
    { id: 185, name: "leg stiffness or tightness" },
    { id: 186, name: "difficulty breathing" },
    { id: 187, name: "rib pain" },
    { id: 188, name: "joint pain" },
    { id: 189, name: "muscle stiffness or tightness" },
    { id: 190, name: "hand or finger lump or mass" },
    { id: 191, name: "chills" },
    { id: 192, name: "groin pain" },
    { id: 193, name: "fatigue" },
    { id: 194, name: "abdominal distention" },
    { id: 195, name: "regurgitation.1" },
    { id: 196, name: "symptoms of the kidneys" },
    { id: 197, name: "melena" },
    { id: 198, name: "flushing" },
    { id: 199, name: "coughing up sputum" },
    { id: 200, name: "seizures" },
    { id: 201, name: "delusions or hallucinations" },
    { id: 202, name: "pain or soreness of breast" },
    { id: 203, name: "excessive urination at night" },
    { id: 204, name: "bleeding from eye" },
    { id: 205, name: "rectal bleeding" },
    { id: 206, name: "constipation" },
    { id: 207, name: "temper problems" },
    { id: 208, name: "coryza" },
    { id: 209, name: "wrist weakness" },
    { id: 210, name: "hemoptysis" },
    { id: 211, name: "lymphedema" },
    { id: 212, name: "skin on leg or foot looks infected" },
    { id: 213, name: "allergic reaction" },
    { id: 214, name: "congestion in chest" },
    { id: 215, name: "muscle swelling" },
    { id: 216, name: "low back weakness" },
    { id: 217, name: "sleepiness" },
    { id: 218, name: "apnea" },
    { id: 219, name: "abnormal breathing sounds" },
    { id: 220, name: "excessive growth" },
    { id: 221, name: "blood clots during menstrual periods" },
    { id: 222, name: "absence of menstruation" },
    { id: 223, name: "pulling at ears" },
    { id: 224, name: "gum pain" },
    { id: 225, name: "redness in ear" },
    { id: 226, name: "fluid retention" },
    { id: 227, name: "flu-like syndrome" },
    { id: 228, name: "sinus congestion" },
    { id: 229, name: "painful sinuses" },
    { id: 230, name: "fears and phobias" },
    { id: 231, name: "recent pregnancy" },
    { id: 232, name: "uterine contractions" },
    { id: 233, name: "burning chest pain" },
    { id: 234, name: "back cramps or spasms" },
    { id: 235, name: "stiffness all over" },
    { id: 236, name: "muscle cramps, contractures, or spasms" },
    { id: 237, name: "low back cramps or spasms" },
    { id: 238, name: "back mass or lump" },
    { id: 239, name: "nosebleed" },
    { id: 240, name: "long menstrual periods" },
    { id: 241, name: "heavy menstrual flow" },
    { id: 242, name: "unpredictable menstruation" },
    { id: 243, name: "painful menstruation" },
    { id: 244, name: "infertility" },
    { id: 245, name: "frequent menstruation" },
    { id: 246, name: "sweating" },
    { id: 247, name: "mass on eyelid" },
    { id: 248, name: "swollen eye" },
    { id: 249, name: "eyelid swelling" },
    { id: 250, name: "eyelid lesion or rash" },
    { id: 251, name: "unwanted hair" },
    { id: 252, name: "symptoms of bladder" },
    { id: 253, name: "irregular appearing nails" },
    { id: 254, name: "itching of skin" },
    { id: 255, name: "hurts to breath" },
    { id: 256, name: "skin dryness, peeling, scaliness, or roughness" },
    { id: 257, name: "skin on arm or hand looks infected" },
    { id: 258, name: "skin irritation" },
    { id: 259, name: "itchy scalp" },
    { id: 260, name: "incontinence of stool" },
    { id: 261, name: "warts" },
    { id: 262, name: "bumps on penis" },
    { id: 263, name: "too little hair" },
    { id: 264, name: "foot or toe lump or mass" },
    { id: 265, name: "skin rash" },
    { id: 266, name: "mass or swelling around the anus" },
    { id: 267, name: "ankle swelling" },
    { id: 268, name: "drainage in throat" },
    { id: 269, name: "dry or flaky scalp" },
    { id: 270, name: "premenstrual tension or irritability" },
    { id: 271, name: "feeling hot" },
    { id: 272, name: "foot or toe stiffness or tightness" },
    { id: 273, name: "pelvic pressure" },
    { id: 274, name: "elbow swelling" },
    { id: 275, name: "early or late onset of menopause" },
    { id: 276, name: "bleeding from ear" },
    { id: 277, name: "hand or finger weakness" },
    { id: 278, name: "low self-esteem" },
    { id: 279, name: "itching of the anus" },
    { id: 280, name: "swollen or red tonsils" },
    { id: 281, name: "irregular belly button" },
    { id: 282, name: "lip sore" },
    { id: 283, name: "vulvar sore" },
    { id: 284, name: "hip stiffness or tightness" },
    { id: 285, name: "mouth pain" },
    { id: 286, name: "arm weakness" },
    { id: 287, name: "leg lump or mass" },
    { id: 288, name: "penis pain" },
    { id: 289, name: "loss of sex drive" },
    { id: 290, name: "obsessions and compulsions" },
    { id: 291, name: "antisocial behavior" },
    { id: 292, name: "neck cramps or spasms" },
    { id: 293, name: "poor circulation" },
    { id: 294, name: "thirst" },
    { id: 295, name: "sneezing" },
    { id: 296, name: "bladder mass" },
    { id: 297, name: "premature ejaculation" },
    { id: 298, name: "leg weakness" },
    { id: 299, name: "penis redness" },
    { id: 300, name: "penile discharge" },
    { id: 301, name: "shoulder lump or mass" },
    { id: 302, name: "cloudy eye" },
    { id: 303, name: "hysterical behavior" },
    { id: 304, name: "arm lump or mass" },
    { id: 305, name: "nightmares" },
    { id: 306, name: "bleeding gums" },
    { id: 307, name: "pain in gums" },
    { id: 308, name: "bedwetting" },
    { id: 309, name: "diaper rash" },
    { id: 310, name: "lump or mass of breast" },
    { id: 311, name: "vaginal bleeding after menopause" },
    { id: 312, name: "itching of scrotum" },
    { id: 313, name: "postpartum problems of the breast" },
    { id: 314, name: "hesitancy" },
    { id: 315, name: "muscle weakness" },
    { id: 316, name: "throat redness" },
    { id: 317, name: "joint swelling" },
    { id: 318, name: "redness in or around nose" },
    { id: 319, name: "wrinkles on skin" },
    { id: 320, name: "foot or toe weakness" },
    { id: 321, name: "hand or finger cramps or spasms" },
    { id: 322, name: "back stiffness or tightness" },
    { id: 323, name: "wrist lump or mass" },
    { id: 324, name: "skin pain" },
    { id: 325, name: "low urine output" },
    { id: 326, name: "sore in nose" },
    { id: 327, name: "ankle weakness" }
];


let selectedSymptoms = [];
let isLoading = false;

const searchInput = document.getElementById('symptom-search');
const dropdown = document.getElementById('symptom-dropdown');
const chipsContainer = document.getElementById('chips-container');
const symptomCount = document.getElementById('symptom-count');
const clearAllBtn = document.getElementById('clear-all-btn');
const getDiagnosisBtn = document.getElementById('get-diagnosis-btn');
const symptomSection = document.getElementById('symptom-section');
const resultsSection = document.getElementById('results-section');
const backBtn = document.getElementById('back-btn');
const checkAnotherBtn = document.getElementById('check-another-btn');
const predictionsContainer = document.getElementById('predictions-container');
const symptomsList = document.getElementById('symptoms-list');

/**
 * Update the UI state based on selected symptoms
 */
function updateUI() {
    const count = selectedSymptoms.length;
    symptomCount.textContent = count;
    
    clearAllBtn.style.display = count > 0 ? 'inline-flex' : 'none';
    getDiagnosisBtn.disabled = count === 0;
    
    console.log(`UI updated: ${count} symptom(s) selected`);
}

/**
 * Highlight matching text in search results
 * @param {string} text - The full text
 * @param {string} query - The search query
 * @returns {string} HTML string with highlighted match
 */
function highlightMatch(text, query) {
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);
    
    if (index === -1) return text;
    
    const before = text.substring(0, index);
    const match = text.substring(index, index + query.length);
    const after = text.substring(index + query.length);
    
    return `${before}<strong style="color: var(--primary-blue); font-weight: 600;">${match}</strong>${after}`;
}

/**
 * Filter symptoms using PREFIX MATCHING (starts with)
 * @param {string} searchText - The text to search for
 */
/**
 * Filter symptoms using STRICT PREFIX MATCHING (starts with only)
 * @param {string} searchText - The text to search for
 */
function filterSymptoms(searchText) {
    const query = searchText.toLowerCase().trim();
    
    // Hide dropdown if search is empty
    if (query === '') {
        dropdown.classList.remove('show');
        dropdown.innerHTML = '';
        searchInput.setAttribute('aria-expanded', 'false');
        return;
    }
    
    // Filter symptoms that START WITH the query (first word only) and aren't already selected
    const filtered = symptoms.filter(symptom => {
        const symptomLower = symptom.name.toLowerCase();
        const isNotSelected = !selectedSymptoms.some(s => s.id === symptom.id);
        
        // STRICT: Only match if the entire symptom name starts with the query
        const startsWithQuery = symptomLower.startsWith(query);
        
        return isNotSelected && startsWithQuery;
    }).slice(0, 10); // Limit to 10 results
    
    // Display results
    if (filtered.length > 0) {
        dropdown.innerHTML = filtered.map(symptom => 
            `<div class="dropdown-item" data-id="${symptom.id}" role="option" tabindex="0">
                ${highlightMatch(symptom.name, query)}
            </div>`
        ).join('');
        dropdown.classList.add('show');
        searchInput.setAttribute('aria-expanded', 'true');
        
        console.log(`Found ${filtered.length} symptoms starting with: "${query}"`);
    } else {
        dropdown.innerHTML = '<div class="dropdown-empty">No matching symptoms found</div>';
        dropdown.classList.add('show');
        searchInput.setAttribute('aria-expanded', 'true');
        console.log(`No symptoms found starting with: "${query}"`);
    }
}
/**
 * Select a symptom and add it to the list
 * @param {number} symptomId - The ID of the symptom to select
 */
function selectSymptom(symptomId) {
    const symptom = symptoms.find(s => s.id === symptomId);
    
    if (!symptom) {
        console.error(`Symptom with ID ${symptomId} not found`);
        return;
    }
    
    // Check if already selected
    if (selectedSymptoms.some(s => s.id === symptomId)) {
        console.log(`Symptom "${symptom.name}" is already selected`);
        return;
    }
    
    // Add to selected symptoms
    selectedSymptoms.push(symptom);
    
    // Create chip element
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.dataset.id = symptomId;
    chip.innerHTML = `
        <span>${symptom.name}</span>
        <button class="chip-remove" aria-label="Remove ${symptom.name}">×</button>
    `;
    
    // Add remove event listener
    chip.querySelector('.chip-remove').addEventListener('click', () => {
        removeSymptom(symptomId);
    });
    
    chipsContainer.appendChild(chip);
    
    // Clear search and hide dropdown
    searchInput.value = '';
    dropdown.classList.remove('show');
    dropdown.innerHTML = '';
    searchInput.setAttribute('aria-expanded', 'false');
    searchInput.focus();
    
    // Update UI
    updateUI();
    
    console.log(`Selected symptom: "${symptom.name}" (ID: ${symptomId})`);
}

/**
 * Remove a symptom from the selected list
 * @param {number} symptomId - The ID of the symptom to remove
 */
function removeSymptom(symptomId) {
    selectedSymptoms = selectedSymptoms.filter(s => s.id !== symptomId);
    
    const chip = chipsContainer.querySelector(`[data-id="${symptomId}"]`);
    if (chip) {
        chip.remove();
    }
    
    updateUI();
    console.log(`Removed symptom with ID: ${symptomId}`);
}

/**
 * Clear all selected symptoms
 */
function clearAllSymptoms() {
    selectedSymptoms = [];
    chipsContainer.innerHTML = '';
    updateUI();
    console.log('All symptoms cleared');
}

/**
 * Show loading state
 */
function showLoading() {
    isLoading = true;
    getDiagnosisBtn.disabled = true;
    getDiagnosisBtn.querySelector('.btn-text').style.display = 'none';
    getDiagnosisBtn.querySelector('.loading-spinner').style.display = 'inline-block';
    console.log('Loading state activated');
}

/**
 * Hide loading state
 */
function hideLoading() {
    isLoading = false;
    getDiagnosisBtn.disabled = selectedSymptoms.length === 0;
    getDiagnosisBtn.querySelector('.btn-text').style.display = 'inline';
    getDiagnosisBtn.querySelector('.loading-spinner').style.display = 'none';
    console.log('Loading state deactivated');
}

/**
 * Get diagnosis from the API
 */
async function getDiagnosis() {
    if (selectedSymptoms.length === 0) {
        alert('Please select at least one symptom');
        return;
    }
    
    const symptomIds = selectedSymptoms.map(s => s.name.replace(/ /g, '_'));
    console.log('Requesting diagnosis for symptoms:', symptomIds);
    
    showLoading();
    
    try {
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ symptom_ids: symptomIds })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API response received:', data);
        
        if (!data.predictions || !Array.isArray(data.predictions)) {
            throw new Error('Invalid response format from API');
        }
        
        displayResults(data.predictions);
        
    } catch (error) {
        console.error('Error fetching diagnosis:', error);
        alert(`Failed to get diagnosis: ${error.message}\n\nPlease ensure the Flask backend is running on http://localhost:5000`);
    } finally {
        hideLoading();
    }
}

/**
 * Display diagnosis results
 * @param {Array} predictions - Array of prediction objects
 */
function displayResults(predictions) {
    console.log('Displaying results for predictions:', predictions);
    
    predictionsContainer.innerHTML = '';
    symptomsList.innerHTML = '';
    
    predictions.slice(0, 3).forEach((prediction, index) => {
        const confidence = prediction.confidence;
        const percentage = Math.round(confidence * 100);
        
        let confidenceClass = 'low-confidence';
        let progressClass = 'low';
        
        if (confidence > 0.70) {
            confidenceClass = 'high-confidence';
            progressClass = 'high';
        } else if (confidence >= 0.50) {
            confidenceClass = 'medium-confidence';
            progressClass = 'medium';
        }
        
        const card = document.createElement('div');
        card.className = `prediction-card ${confidenceClass}`;
        card.innerHTML = `
            <span class="prediction-rank">#${index + 1} Most Likely</span>
            <h3 class="disease-name">${prediction.disease}</h3>
            <div class="confidence-info">
                <span class="confidence-label">Confidence Level</span>
                <span class="confidence-value">${percentage}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill ${progressClass}" style="width: ${percentage}%"></div>
            </div>
        `;
        
        predictionsContainer.appendChild(card);
    });
    
    selectedSymptoms.forEach(symptom => {
        const li = document.createElement('li');
        li.textContent = symptom.name;
        symptomsList.appendChild(li);
    });
    
    symptomSection.style.display = 'none';
    resultsSection.style.display = 'block';
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log('Results displayed successfully');
}

/**
 * Navigate back to symptom selection
 */
function navigateBack() {
    resultsSection.style.display = 'none';
    symptomSection.style.display = 'block';
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Navigated back to symptom selection');
}

/**
 * Check another condition (clear and go back)
 */
function checkAnother() {
    clearAllSymptoms();
    navigateBack();
    console.log('Starting new diagnosis');
}

// Search input - filter symptoms as user types
searchInput.addEventListener('input', (e) => {
    filterSymptoms(e.target.value);
});

// Dropdown - select symptom on click
dropdown.addEventListener('click', (e) => {
    const item = e.target.closest('.dropdown-item');
    if (item && item.dataset.id) {
        const symptomId = parseInt(item.dataset.id);
        selectSymptom(symptomId);
    }
});

// Search input focus
searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim() !== '') {
        filterSymptoms(searchInput.value);
    }
});

// Click outside to hide dropdown
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
        searchInput.setAttribute('aria-expanded', 'false');
    }
});

// Keyboard navigation for dropdown
searchInput.addEventListener('keydown', (e) => {
    const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
    const currentFocus = dropdown.querySelector('.dropdown-item:focus');
    let index = Array.from(dropdownItems).indexOf(currentFocus);
    
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        index = index < dropdownItems.length - 1 ? index + 1 : 0;
        if (dropdownItems[index]) {
            dropdownItems[index].focus();
        }
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        index = index > 0 ? index - 1 : dropdownItems.length - 1;
        if (dropdownItems[index]) {
            dropdownItems[index].focus();
        }
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentFocus && currentFocus.dataset.id) {
            selectSymptom(parseInt(currentFocus.dataset.id));
        } else if (dropdownItems.length > 0 && dropdownItems[0].dataset.id) {
            selectSymptom(parseInt(dropdownItems[0].dataset.id));
        }
    } else if (e.key === 'Escape') {
        dropdown.classList.remove('show');
        searchInput.setAttribute('aria-expanded', 'false');
        searchInput.focus();
    }
});

// Dropdown item keyboard support
dropdown.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('dropdown-item')) {
        e.preventDefault();
        const symptomId = parseInt(e.target.dataset.id);
        if (symptomId) {
            selectSymptom(symptomId);
        }
    }
});

// Button event listeners
clearAllBtn.addEventListener('click', clearAllSymptoms);
getDiagnosisBtn.addEventListener('click', getDiagnosis);
backBtn.addEventListener('click', navigateBack);
checkAnotherBtn.addEventListener('click', checkAnother);

console.log('SymptomAI Disease Predictor initialized');
console.log(`Loaded ${symptoms.length} symptoms`);
console.log('Prefix matching enabled: type "e" for symptoms starting with "e"');
updateUI();
