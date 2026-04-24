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

    // Simulate AI Work
    setTimeout(() => {
        result.innerHTML = `
            <h3>Assignment: ${topic}</h3>
            <p><strong>Introduction:</strong> ${topic} is a crucial subject in modern academics. This assignment explores the depth and impact of this topic on society...</p>
            <p><strong>Main Body:</strong> Research indicates that ${topic} has multiple layers. From a sociological perspective, it influences how communities interact...</p>
            <p><strong>Conclusion:</strong> In summary, understanding ${topic} is essential for future developments.</p>
            <p><strong>References:</strong> Academic Journal 2026.</p>
        `;
        loader.classList.add('hidden');
        output.classList.remove('hidden');
        btn.classList.remove('hidden');
    }, 2000);
}

function copyText() {
    const text = document.getElementById('result').innerText;
    navigator.clipboard.writeText(text);
    alert("Assignment Copied!");
}

function downloadText() {
    const text = document.getElementById('result').innerText;
    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "My_Assignment.txt";
    element.click();
}
