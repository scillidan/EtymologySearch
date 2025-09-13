const fetchOrigin = async (word) => {
  try {
    const response = await fetch(
      `https://gm-flask-etymology-scraper.vercel.app/org?word=${word}`,
    );

    if (!response.ok) {
      throw new Error(`http error, status: ${response.status}`);
    }

    const data = await response.json();
    return data.oldest_origin.toLowerCase();
  } catch (err) {
    console.error(`fetch failed for "${word}":`, err);
    return "error";
  }
};

export default fetchOrigin;
