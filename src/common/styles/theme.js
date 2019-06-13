const theme = {
  responsiveSize: {
    desctop: 1200,
    laptop: 1024,
    mobile: 768
  },
  responsiveStyles: (device, style) => {
    return `@media screen and (max-width: ${device}px) {${style}}`;
  }
};

export default theme;
