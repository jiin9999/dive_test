import { createGlobalStyle } from "styled-components";
import PretendardGOV from "./PretendardGOVVariable.woff2";

export default createGlobalStyle`
/*
Copyright (c) 2021 Kil Hyung-jin, with Reserved Font Name Pretendard GOV.
https://github.com/orioncactus/pretendard

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL
*/

@font-face {
	font-family: 'Pretendard GOV Variable';
	font-weight: 45 920;
	font-style: normal;
	font-display: swap;
	src: local('Pretendard GOV Variable'), 
    url(${PretendardGOV}) format('woff2-variations');
}

`;