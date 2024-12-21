export const formatWord = function (word) {
  if (!word || Number(word)) return word ?? ''

  const firstLetter = word[0].toUpperCase()
  const lastPart = word.slice(1)
  return `${firstLetter}${lastPart}`
}
