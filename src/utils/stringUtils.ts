export const normalizeDiacriticText = (inText: string): string => {
  if (!!inText) {
    inText = inText
      .normalize('NFD')
      .replace(/[\u0300-\u036f´`¨]/g, '')
      .replace(/[^A-Za-z0-9 ]+/g, '') // remove all special character
      .replace(/^\w/, (c) => c.toUpperCase())
      .replace(/(^|\. *)([a-z])/g, (match, separator, char) => separator + char.toUpperCase());
  }
  return inText;
};
