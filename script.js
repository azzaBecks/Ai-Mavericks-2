function generateCompletion() {
    const input = document.getElementById('completionInput').value;
    const output = document.getElementById('output');
    
    // Simulated completions
    const completions = [
        "is a fascinating topic in the field of artificial intelligence.",
        "has revolutionized the way we interact with technology.",
        "presents both opportunities and challenges for society.",
        "requires careful consideration of ethical implications.",
        "continues to evolve rapidly, pushing the boundaries of what's possible."
    ];

    // Simple simulation of LLM completion
    if (input.trim() !== '') {
        const randomCompletion = completions[Math.floor(Math.random() * completions.length)];
        output.textContent = input + " " + randomCompletion;
    } else {
        output.textContent = "Please enter a sentence starter.";
    }
}