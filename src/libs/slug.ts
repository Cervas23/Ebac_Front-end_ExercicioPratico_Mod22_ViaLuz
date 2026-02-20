export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")                 // separa acentos
    .replace(/[\u0300-\u036f]/g, "")  // remove acentos
    .replace(/\s+/g, "-")             // espaço -> -
    .replace(/[^\w-]+/g, "")          // remove caracteres especiais
    .replace(/--+/g, "-")             // evita --
    .trim();
}