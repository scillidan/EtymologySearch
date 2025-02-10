const fetchOrigin = async (word) => {
  try {
    const response = await fetch(
      `https://safe-temple-75715-0aecad923576.herokuapp.com/org?word=${word}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.oldest_origin.toLowerCase();
  } catch (err) {
    console.error(`Failed to fetch etymology for "${word}":`, err);
    return "unknown";
  }
};

export default fetchOrigin;
