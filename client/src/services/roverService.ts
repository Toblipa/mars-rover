export const sendInstructions = async (instructions: string) => {
  try {
    return await fetch('/api/instructions', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              instructions: instructions,
            })
        })
        .then((res) => res.json());
  } catch (error) {
    console.error("Error", error);
  }
};
