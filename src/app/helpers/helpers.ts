// GET DATA FROM API

export async function getData(input: string) {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    );

    if (!res.ok) {
      const result = await res.json();

      return result;
    }

    return res.json();
  } catch (error: any) {
    // TODO:
    // throw new Error("error");
  }
}
