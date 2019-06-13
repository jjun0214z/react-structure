export default (name, font, fontWeight = "normal", fontStyle = "normal") => {
  return `
    @font-face{
        font-family: ${name};
        font-weight: ${fontWeight};
        font-style: ${fontStyle};
        src: url(${require("common/fonts/" + font + ".woff")}) format("woff"),
          url(${require("common/fonts/" + font + ".otf")}) format('opentype');
    }
  `;
};
