export function truncateSmart(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;

  const slice = text.slice(0, maxLength);

  // 🔎 tenta cortar primeiro em pontuação (fica mais natural pra notícia)
  const punctuationIndex = Math.max(
    slice.lastIndexOf("."),
    slice.lastIndexOf(":"),
    slice.lastIndexOf("-"),
    slice.lastIndexOf("—")
  );

  // Se encontrou pontuação depois de 60% do limite, usa ela
  if (punctuationIndex > maxLength * 0.6) {
    return slice.slice(0, punctuationIndex) + "...";
  }

  // Senão corta pela última palavra completa
  const lastSpace = slice.lastIndexOf(" ");
  if (lastSpace === -1) return slice + "...";

  return slice.slice(0, lastSpace) + "...";
}