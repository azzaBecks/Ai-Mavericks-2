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
const analyzeSentiment = () => {
    const sentimentInput = document.getElementById('sentimentInput').value; // Get input value
    const sentimentOutput = document.getElementById('sentimentOutput'); // Get output element

    const setSentimentOutput = (message) => {
      sentimentOutput.textContent = message; // Update output with message
    };

    if (sentimentInput.trim() !== '') {
      setSentimentOutput(''); // Clear the output initially
      setTimeout(() => {
        // Simple sentiment analysis simulation
        const words = sentimentInput.toLowerCase().split(' ');
        const positiveWords = ['good', 'great', 'excellent', 'happy', 'love', 'like', 'best'];
        const negativeWords = ['bad', 'awful', 'terrible', 'sad', 'hate', 'worst', 'dislike'];
        let score = 0;

        words.forEach(word => {
          if (positiveWords.includes(word)) score++;
          if (negativeWords.includes(word)) score--;
        });

        let sentiment;
        if (score > 0) sentiment = 'Positive 😊';
        else if (score < 0) sentiment = 'Negative 😞';
        else sentiment = 'Neutral 😐';

        setSentimentOutput(`Sentiment: ${sentiment}`);
      }, 300);
    } else {
      setSentimentOutput('Please enter a sentence for analysis.');
    }
  };
