import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";

export const HeroContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: calc(100vh + 80px);
	position: relative;
	z-index: 1;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.2) 0%,
				rgba(0, 0, 0, 0.6) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 0px;
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const HeroH1 = styled.h1`
	color: #fff;
	font-size: 48px;
	text-align: left;
	display: flex;
	flex-wrap: wrap;
	text-shadow: 1px 1px 2px #fff, 0 0 1em #1df3f4, 0 0 0.2em #1df3f4,
		0 0 0.4em #1df3f4;

	@media screen and (max-width: 768px) {
		font-size: 40px;
		margin-left: 10px;
	}

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const HeroP = styled.p`
	margin-top: 24px;
	color: #fff;
	font-size: 24px;
	text-align: left;
	max-width: 600px;
	display: flex;
	flex-wrap: wrap;

	@media screen and (max-width: 768px) {
		font-size: 24px;
		margin-left: 10px;
	}

	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
`;

export const HeroBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: row;
		/* margin-left: 10px; */
		justify-content: center;
	}
`;

export const IoCopy = styled(IoMdCopy)`
	margin-left: 8px;
	font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;

export const HeroContentItemKiri = styled.div`
	flex: 2;
`;

export const HeroContentItemKanan = styled.div`
	flex: 3;
`;

export const HeroContentImgWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	margin-bottom: 60px;
	justify-content: flex-start;
`;

export const HeroImg = styled.img`
	width: 325px;
	height: 100%;
`;
