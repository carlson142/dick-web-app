// GET DATA FROM API

export async function getData(input: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
  );

  if (!res.ok) {
    throw new Error("Wrong...");
  }

  return res.json();
}
