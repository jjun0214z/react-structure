import { createGlobalStyle } from "styled-components";
import fontFace from "./fontFace";

export default createGlobalStyle`
  /*  웹폰트 */
  ${fontFace("Noto Sans KR", "NotoSansKR-Thin", 100)}
  ${fontFace("Noto Sans KR", "NotoSansKR-Light", 200)}
  ${fontFace("Noto Sans KR", "NotoSansKR-Regular", 300)}
  ${fontFace("Noto Sans KR", "NotoSansKR-Medium", 400)}
  ${fontFace("Noto Sans KR", "NotoSansKR-Bold", 500)}

  /* http://meyerweb.com/eric/tools/css/reset/
    v4.0 | 20180602
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    /*기본 폰트 설정*/
    font-weight: 200;
    font-family: "Noto Sans KR" ;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

`;
