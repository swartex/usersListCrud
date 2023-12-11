export function randomId(max = 999, min = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
