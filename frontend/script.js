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
    { id: 33, name: "pus in sputum" },
    { id: 34, name: "symptoms of the scrotum and testes" },
    { id: 35, name: "swelling of scrotum" },
    { id: 36, name: "pain in testicles" },
    { id: 37, name: "flatulence" },
    { id: 38, name: "pus draining from ear" },
    { id: 39, name: "jaundice" },
    { id: 40, name: "mass in scrotum" },
    { id: 41, name: "white discharge from eye" },
    { id: 42, name: "irritable infant" },
    { id: 43, name: "abusing alcohol" },
    { id: 44, name: "fainting" },
    { id: 45, name: "hostile behavior" },
    { id: 46, name: "drug abuse" },
    { id: 47, name: "sharp abdominal pain" },
    { id: 48, name: "feeling ill" },
    { id: 49, name: "vomiting" },
    { id: 50, name: "headache" },
    { id: 51, name: "nausea" },
    { id: 52, name: "diarrhea" },
    { id: 53, name: "vaginal itching" },
    { id: 54, name: "vaginal dryness" },
    { id: 55, name: "painful urination" },
    { id: 56, name: "involuntary urination" },
    { id: 57, name: "pain during intercourse" },
    { id: 58, name: "frequent urination" },
    { id: 59, name: "lower abdominal pain" },
    { id: 60, name: "vaginal discharge" },
    { id: 61, name: "blood in urine" },
    { id: 62, name: "hot flashes" },
    { id: 63, name: "intermenstrual bleeding" },
    { id: 64, name: "hand or finger pain" },
    { id: 65, name: "wrist pain" },
    { id: 66, name: "hand or finger swelling" },
    { id: 67, name: "arm pain" },
    { id: 68, name: "wrist swelling" },
    { id: 69, name: "arm stiffness or tightness" },
    { id: 70, name: "arm swelling" },
    { id: 71, name: "hand or finger stiffness or tightness" },
    { id: 72, name: "wrist stiffness or tightness" },
    { id: 73, name: "lip swelling" },
    { id: 74, name: "toothache" },
    { id: 75, name: "abnormal appearing skin" },
    { id: 76, name: "skin lesion" },
    { id: 77, name: "acne or pimples" },
    { id: 78, name: "dry lips" },
    { id: 79, name: "facial pain" },
    { id: 80, name: "mouth ulcer" },
    { id: 81, name: "skin growth" },
    { id: 82, name: "eye deviation" },
    { id: 83, name: "diminished vision" },
    { id: 84, name: "double vision" },
    { id: 85, name: "cross-eyed" },
    { id: 86, name: "symptoms of eye" },
    { id: 87, name: "pain in eye" },
    { id: 88, name: "eye moves abnormally" },
    { id: 89, name: "abnormal movement of eyelid" },
    { id: 90, name: "foreign body sensation in eye" },
    { id: 91, name: "irregular appearing scalp" },
    { id: 92, name: "swollen lymph nodes" },
    { id: 93, name: "back pain" },
    { id: 94, name: "neck pain" },
    { id: 95, name: "low back pain" },
    { id: 96, name: "pain of the anus" },
    { id: 97, name: "pain during pregnancy" },
    { id: 98, name: "pelvic pain" },
    { id: 99, name: "impotence" },
    { id: 100, name: "infant spitting up" },
    { id: 101, name: "vomiting blood" },
    { id: 102, name: "regurgitation" },
    { id: 103, name: "burning abdominal pain" },
    { id: 104, name: "restlessness" },
    { id: 105, name: "symptoms of infants" },
    { id: 106, name: "wheezing" },
    { id: 107, name: "peripheral edema" },
    { id: 108, name: "neck mass" },
    { id: 109, name: "ear pain" },
    { id: 110, name: "jaw swelling" },
    { id: 111, name: "mouth dryness" },
    { id: 112, name: "neck swelling" },
    { id: 113, name: "knee pain" },
    { id: 114, name: "foot or toe pain" },
    { id: 115, name: "bowlegged or knock-kneed" },
    { id: 116, name: "ankle pain" },
    { id: 117, name: "bones are painful" },
    { id: 118, name: "knee weakness" },
    { id: 119, name: "elbow pain" },
    { id: 120, name: "knee swelling" },
    { id: 121, name: "skin moles" },
    { id: 122, name: "knee lump or mass" },
    { id: 123, name: "weight gain" },
    { id: 124, name: "problems with movement" },
    { id: 125, name: "knee stiffness or tightness" },
    { id: 126, name: "leg swelling" },
    { id: 127, name: "foot or toe swelling" },
    { id: 128, name: "heartburn" },
    { id: 129, name: "smoking problems" },
    { id: 130, name: "muscle pain" },
    { id: 131, name: "infant feeding problem" },
    { id: 132, name: "recent weight loss" },
    { id: 133, name: "problems with shape or size of breast" },
    { id: 134, name: "underweight" },
    { id: 135, name: "difficulty eating" },
    { id: 136, name: "scanty menstrual flow" },
    { id: 137, name: "vaginal pain" },
    { id: 138, name: "vaginal redness" },
    { id: 139, name: "vulvar irritation" },
    { id: 140, name: "weakness" },
    { id: 141, name: "decreased heart rate" },
    { id: 142, name: "increased heart rate" },
    { id: 143, name: "bleeding or discharge from nipple" },
    { id: 144, name: "ringing in ear" },
    { id: 145, name: "plugged feeling in ear" },
    { id: 146, name: "itchy ear(s)" },
    { id: 147, name: "frontal headache" },
    { id: 148, name: "fluid in ear" },
    { id: 149, name: "neck stiffness or tightness" },
    { id: 150, name: "spots or clouds in vision" },
    { id: 151, name: "eye redness" },
    { id: 152, name: "lacrimation" },
    { id: 153, name: "itchiness of eye" },
    { id: 154, name: "blindness" },
    { id: 155, name: "eye burns or stings" },
    { id: 156, name: "itchy eyelid" },
    { id: 157, name: "feeling cold" },
    { id: 158, name: "decreased appetite" },
    { id: 159, name: "excessive appetite" },
    { id: 160, name: "excessive anger" },
    { id: 161, name: "loss of sensation" },
    { id: 162, name: "focal weakness" },
    { id: 163, name: "slurring words" },
    { id: 164, name: "symptoms of the face" },
    { id: 165, name: "disturbance of memory" },
    { id: 166, name: "paresthesia" },
    { id: 167, name: "side pain" },
    { id: 168, name: "fever" },
    { id: 169, name: "shoulder pain" },
    { id: 170, name: "shoulder stiffness or tightness" },
    { id: 171, name: "shoulder weakness" },
    { id: 172, name: "arm cramps or spasms" },
    { id: 173, name: "shoulder swelling" },
    { id: 174, name: "tongue lesions" },
    { id: 175, name: "leg cramps or spasms" },
    { id: 176, name: "abnormal appearing tongue" },
    { id: 177, name: "ache all over" },
    { id: 178, name: "lower body pain" },
    { id: 179, name: "problems during pregnancy" },
    { id: 180, name: "spotting or bleeding during pregnancy" },
    { id: 181, name: "cramps and spasms" },
    { id: 182, name: "upper abdominal pain" },
    { id: 183, name: "stomach bloating" },
    { id: 184, name: "changes in stool appearance" },
    { id: 185, name: "unusual color or odor to urine" },
    { id: 186, name: "kidney mass" },
    { id: 187, name: "swollen abdomen" },
    { id: 188, name: "symptoms of prostate" },
    { id: 189, name: "leg stiffness or tightness" },
    { id: 190, name: "difficulty breathing" },
    { id: 191, name: "rib pain" },
    { id: 192, name: "joint pain" },
    { id: 193, name: "muscle stiffness or tightness" },
    { id: 194, name: "pallor" },
    { id: 195, name: "hand or finger lump or mass" },
    { id: 196, name: "chills" },
    { id: 197, name: "groin pain" },
    { id: 198, name: "fatigue" },
    { id: 199, name: "abdominal distention" },
    { id: 200, name: "regurgitation.1" },
    { id: 201, name: "symptoms of the kidneys" },
    { id: 202, name: "melena" },
    { id: 203, name: "flushing" },
    { id: 204, name: "coughing up sputum" },
    { id: 205, name: "seizures" },
    { id: 206, name: "delusions or hallucinations" },
    { id: 207, name: "shoulder cramps or spasms" },
    { id: 208, name: "joint stiffness or tightness" },
    { id: 209, name: "pain or soreness of breast" },
    { id: 210, name: "excessive urination at night" },
    { id: 211, name: "bleeding from eye" },
    { id: 212, name: "rectal bleeding" },
    { id: 213, name: "constipation" },
    { id: 214, name: "temper problems" },
    { id: 215, name: "coryza" },
    { id: 216, name: "wrist weakness" },
    { id: 217, name: "eye strain" },
    { id: 218, name: "hemoptysis" },
    { id: 219, name: "lymphedema" },
    { id: 220, name: "skin on leg or foot looks infected" },
    { id: 221, name: "allergic reaction" },
    { id: 222, name: "congestion in chest" },
    { id: 223, name: "muscle swelling" },
    { id: 224, name: "pus in urine" },
    { id: 225, name: "abnormal size or shape of ear" },
    { id: 226, name: "low back weakness" },
    { id: 227, name: "sleepiness" },
    { id: 228, name: "apnea" },
    { id: 229, name: "abnormal breathing sounds" },
    { id: 230, name: "excessive growth" },
    { id: 231, name: "elbow cramps or spasms" },
    { id: 232, name: "feeling hot and cold" },
    { id: 233, name: "blood clots during menstrual periods" },
    { id: 234, name: "absence of menstruation" },
    { id: 235, name: "pulling at ears" },
    { id: 236, name: "gum pain" },
    { id: 237, name: "redness in ear" },
    { id: 238, name: "fluid retention" },
    { id: 239, name: "flu-like syndrome" },
    { id: 240, name: "sinus congestion" },
    { id: 241, name: "painful sinuses" },
    { id: 242, name: "fears and phobias" },
    { id: 243, name: "recent pregnancy" },
    { id: 244, name: "uterine contractions" },
    { id: 245, name: "burning chest pain" },
    { id: 246, name: "back cramps or spasms" },
    { id: 247, name: "stiffness all over" },
    { id: 248, name: "muscle cramps, contractures, or spasms" },
    { id: 249, name: "low back cramps or spasms" },
    { id: 250, name: "back mass or lump" },
    { id: 251, name: "nosebleed" },
    { id: 252, name: "long menstrual periods" },
    { id: 253, name: "heavy menstrual flow" },
    { id: 254, name: "unpredictable menstruation" },
    { id: 255, name: "painful menstruation" },
    { id: 256, name: "infertility" },
    { id: 257, name: "frequent menstruation" },
    { id: 258, name: "sweating" },
    { id: 259, name: "mass on eyelid" },
    { id: 260, name: "swollen eye" },
    { id: 261, name: "eyelid swelling" },
    { id: 262, name: "eyelid lesion or rash" },
    { id: 263, name: "unwanted hair" },
    { id: 264, name: "symptoms of bladder" },
    { id: 265, name: "irregular appearing nails" },
    { id: 266, name: "itching of skin" },
    { id: 267, name: "hurts to breath" },
    { id: 268, name: "nailbiting" },
    { id: 269, name: "skin dryness, peeling, scaliness, or roughness" },
    { id: 270, name: "skin on arm or hand looks infected" },
    { id: 271, name: "skin irritation" },
    { id: 272, name: "itchy scalp" },
    { id: 273, name: "hip swelling" },
    { id: 274, name: "incontinence of stool" },
    { id: 275, name: "foot or toe cramps or spasms" },
    { id: 276, name: "warts" },
    { id: 277, name: "bumps on penis" },
    { id: 278, name: "too little hair" },
    { id: 279, name: "foot or toe lump or mass" },
    { id: 280, name: "skin rash" },
    { id: 281, name: "mass or swelling around the anus" },
    { id: 282, name: "low back swelling" },
    { id: 283, name: "ankle swelling" },
    { id: 284, name: "hip lump or mass" },
    { id: 285, name: "drainage in throat" },
    { id: 286, name: "dry or flaky scalp" },
    { id: 287, name: "premenstrual tension or irritability" },
    { id: 288, name: "feeling hot" },
    { id: 289, name: "feet turned in" },
    { id: 290, name: "foot or toe stiffness or tightness" },
    { id: 291, name: "pelvic pressure" },
    { id: 292, name: "elbow swelling" },
    { id: 293, name: "elbow stiffness or tightness" },
    { id: 294, name: "early or late onset of menopause" },
    { id: 295, name: "mass on ear" },
    { id: 296, name: "bleeding from ear" },
    { id: 297, name: "hand or finger weakness" },
    { id: 298, name: "low self-esteem" },
    { id: 299, name: "throat irritation" },
    { id: 300, name: "itching of the anus" },
    { id: 301, name: "swollen or red tonsils" },
    { id: 302, name: "irregular belly button" },
    { id: 303, name: "swollen tongue" },
    { id: 304, name: "lip sore" },
    { id: 305, name: "vulvar sore" },
    { id: 306, name: "hip stiffness or tightness" },
    { id: 307, name: "mouth pain" },
    { id: 308, name: "arm weakness" },
    { id: 309, name: "leg lump or mass" },
    { id: 310, name: "disturbance of smell or taste" },
    { id: 311, name: "discharge in stools" },
    { id: 312, name: "penis pain" },
    { id: 313, name: "loss of sex drive" },
    { id: 314, name: "obsessions and compulsions" },
    { id: 315, name: "antisocial behavior" },
    { id: 316, name: "neck cramps or spasms" },
    { id: 317, name: "pupils unequal" },
    { id: 318, name: "poor circulation" },
    { id: 319, name: "thirst" },
    { id: 320, name: "sleepwalking" },
    { id: 321, name: "skin oiliness" },
    { id: 322, name: "sneezing" },
    { id: 323, name: "bladder mass" },
    { id: 324, name: "knee cramps or spasms" },
    { id: 325, name: "premature ejaculation" },
    { id: 326, name: "leg weakness" },
    { id: 327, name: "posture problems" },
    { id: 328, name: "bleeding in mouth" },
    { id: 329, name: "tongue bleeding" },
    { id: 330, name: "change in skin mole size or color" },
    { id: 331, name: "penis redness" },
    { id: 332, name: "penile discharge" },
    { id: 333, name: "shoulder lump or mass" },
    { id: 334, name: "polyuria" },
    { id: 335, name: "cloudy eye" },
    { id: 336, name: "hysterical behavior" },
    { id: 337, name: "arm lump or mass" },
    { id: 338, name: "nightmares" },
    { id: 339, name: "bleeding gums" },
    { id: 340, name: "pain in gums" },
    { id: 341, name: "bedwetting" },
    { id: 342, name: "diaper rash" },
    { id: 343, name: "lump or mass of breast" },
    { id: 344, name: "vaginal bleeding after menopause" },
    { id: 345, name: "infrequent menstruation" },
    { id: 346, name: "mass on vulva" },
    { id: 347, name: "jaw pain" },
    { id: 348, name: "itching of scrotum" },
    { id: 349, name: "postpartum problems of the breast" },
    { id: 350, name: "eyelid retracted" },
    { id: 351, name: "hesitancy" },
    { id: 352, name: "elbow lump or mass" },
    { id: 353, name: "muscle weakness" },
    { id: 354, name: "throat redness" },
    { id: 355, name: "joint swelling" },
    { id: 356, name: "tongue pain" },
    { id: 357, name: "redness in or around nose" },
    { id: 358, name: "wrinkles on skin" },
    { id: 359, name: "foot or toe weakness" },
    { id: 360, name: "hand or finger cramps or spasms" },
    { id: 361, name: "back stiffness or tightness" },
    { id: 362, name: "wrist lump or mass" },
    { id: 363, name: "skin pain" },
    { id: 364, name: "low back stiffness or tightness" },
    { id: 365, name: "low urine output" },
    { id: 366, name: "skin on head or neck looks infected" },
    { id: 367, name: "stuttering or stammering" },
    { id: 368, name: "problems with orgasm" },
    { id: 369, name: "nose deformity" },
    { id: 370, name: "lump over jaw" },
    { id: 371, name: "sore in nose" },
    { id: 372, name: "hip weakness" },
    { id: 373, name: "back swelling" },
    { id: 374, name: "ankle stiffness or tightness" },
    { id: 375, name: "ankle weakness" },
    { id: 376, name: "neck weakness" }
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
    
    const symptomIds = selectedSymptoms.map(s => s.id);
    console.log('Requesting diagnosis for symptom IDs:', symptomIds);
    
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log('Results displayed successfully');
}

/**
 * Navigate back to symptom selection
 */
function navigateBack() {
    resultsSection.style.display = 'none';
    symptomSection.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
