export const mapResolvedLinksToBloks = (bloks, links) => {
  return bloks.map((blok) => {
    if (blok.link) {
      return {
        ...blok,
        link: links.find((link) => link.uuid == blok.link.id),
      };
    }
    return blok;
  });
};
