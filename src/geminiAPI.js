export async function extractSearchKeywords(inputText) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Extract 3 to 5 key terms from: "${inputText}". Return only a comma-separated list.`
              }
            ]
          }
        ]
      }) // ❌ <-- Remove this closing parenthesis
    }     // ✅ This should be the end of the fetch options object
  );

  const data = await response.json();
  const keywordsString = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return keywordsString.split(',').map((kw) => kw.trim().toLowerCase());
}
