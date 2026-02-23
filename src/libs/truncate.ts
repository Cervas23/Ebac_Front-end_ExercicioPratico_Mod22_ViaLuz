export function truncateSmart(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;

  const slice = text.slice(0, maxLength);

  const punctuationIndex = Math.max(
    slice.lastIndexOf("."),
    slice.lastIndexOf(":"),
    slice.lastIndexOf("-"),
    slice.lastIndexOf("—")
  );

  if (punctuationIndex > maxLength * 0.6) {
    return slice.slice(0, punctuationIndex) + "...";
  }

  const lastSpace = slice.lastIndexOf(" ");
  if (lastSpace === -1) return slice + "...";

  return slice.slice(0, lastSpace) + "...";
}