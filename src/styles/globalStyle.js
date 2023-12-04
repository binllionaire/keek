import { createGlobalStyle } from "styled-components";
import PPRETENDARD_BLACK from "../assets/fonts/PretendardStd-Black.woff";
import PPRETENDARD_BOLD from "../assets/fonts/PretendardStd-Bold.woff";
import PPRETENDARD_MEDIUM from "../assets/fonts/PretendardStd-Medium.woff";
import PPRETENDARD_REGULAR from "../assets/fonts/PretendardStd-Regular.woff";
import PPRETENDARD_SEMIBOLD from "../assets/fonts/PretendardStd-SemiBold.woff";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing : border-box;
}

#root {
  max-width: 768px;
  margin:0 auto;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, canvas, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;

	font-family: 'Pretendard-Regular';
	font-size: 100%;
  color:${({ theme }) => theme.colors.white};
	vertical-align: baseline;

	border: 0;
}
html{
  overflow: hidden;

  width: 100vw;
  height: 100vh;
  padding: 20px;

  background-color:${({ theme }) => theme.colors.darkGrey};
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
button{
  cursor:pointer;
  border: none;
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
input{
  border:none;
}
table {
	border-spacing: 0;
	border-collapse: collapse;
}

  @font-face {
      font-family: 'Pretendard-Black';
      font-weight: 900;
      font-style: normal; 
      src: local("PretendardStd-Black"),url(${PPRETENDARD_BLACK}) format('woff');
  }

  @font-face {
      font-family: 'Pretendard-Bold';
      font-weight: 700;
      font-style: normal; 
      src: local("PretendardStd-Bold"),url(${PPRETENDARD_BOLD}) format('woff');
  }

  @font-face {
      font-family: 'Pretendard-Medium';
      font-weight: 500;
      font-style: normal; 
      src: local("PretendardStd-Medium"),url(${PPRETENDARD_MEDIUM}) format('woff');
  }

  @font-face {
      font-family: 'Pretendard-Regular';
      font-weight: 400;
      font-style: normal; 
      src: local("PretendardStd-Regular"),url(${PPRETENDARD_REGULAR}) format('woff');
  }

  @font-face {
      font-family: 'Pretendard-SemiBold';
      font-weight: 600;
      font-style: normal; 
      src: local("PretendardStd-SemiBold"),url(${PPRETENDARD_SEMIBOLD}) format('woff');
  }
`;
export default GlobalStyle;
