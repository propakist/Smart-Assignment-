// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
if(themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeBtn.innerText = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
}

async function generateAssignment() {
    const topic = document.getElementById('topic').value;
    const btn = document.getElementById('generate-btn');
    const loader = document.getElementById('loader');
    const output = document.getElementById('output-area');
    const result = document.getElementById('result');

    if (!topic) { alert("Please enter a topic!"); return; }

    btn.classList.add('hidden');
    loader.classList.remove('hidden');
    output.classList.add('hidden');

    // Simulate AI generation speed requirement (2-3 seconds)
    setTimeout(() => {
        const dummyText = `
            <h2>${topic}</h2>
            <p><strong>Introduction:</strong> In the modern academic landscape, ${topic} has emerged as a significant area of study...</p>
            <p><strong>Main Body:</strong> Research suggests that the key components of ${topic} involve a variety of factors. Firstly, the historical context provides a foundation for understanding current trends...</p>
            <p><strong>Conclusion:</strong> In conclusion, addressing the challenges of ${topic} requires a collaborative effort...</p>
            <p><strong>References:</strong> Smith, J. (2025). Advanced Studies in ${topic}.</p>
        `;
        
        result.innerHTML = dummyText;
        loader.classList.add('hidden');
        output.classList.remove('hidden');
        btn.classList.remove('hidden');
        
        const wordCount = dummyText.split(' ').length;
        document.getElementById('word-count-display').innerText = `Words: ${wordCount}`;
    }, 2500);
}

function copyText() {
    const text = document.getElementById('result').innerText;
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
}

function downloadText() {
    const text = document.getElementById('result').innerText;
    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Assignment.txt";
    document.body.appendChild(element);
    element.click();
}