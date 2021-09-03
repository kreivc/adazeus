import React, { useState } from "react";
import {
	HeroBg,
	HeroContainer,
	HeroContent,
	VideoBg,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	// IoCopy,
	// ArrowRight,
	HeroContentItemKiri,
	HeroContentItemKanan,
	HeroContentImgWrapper,
	HeroImg,
} from "./HeroElements";
import { Button } from "../ButtonElement";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";
import { Slide } from "@material-ui/core";
import Image from "../../images/Adazeus.png";
import Video from "../../videos/video.mp4";
import Metamask from "../Metamask";

const HeroSection = () => {
	// const [hover, setHover] = useState(false);
	const [open, setOpen] = useState(false);

	// const onHover = () => {
	// 	setHover(!hover);
	// };

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg
					playsInline
					autoPlay
					loop
					muted
					src={Video}
					type="video/mp4"
				/>
			</HeroBg>
			<HeroContent>
				<HeroContentItemKiri>
					<HeroContentImgWrapper>
						<HeroImg src={Image} />
					</HeroContentImgWrapper>
				</HeroContentItemKiri>
				<HeroContentItemKanan>
					<HeroH1>Adazeus</HeroH1>
					<HeroP>
						Adazeus, here to reward his holders and punish the weak.
						Be fair to Zeus and he will give you wings to fly .
					</HeroP>
					<HeroBtnWrapper>
						{/* 0x0000000000000000000000000000000000000000 */}
						<CopyToClipboard text="0xDb2DaF120120D60Dc5d08eBb4b06896a238a610a">
							<Button
								primary="true"
								dark="true"
								onClick={handleClick}
							>
								{/* 0x0000000000000000000000000000000000000000 */}
								0xDb2DaF120120D60Dc5d0.. &nbsp;
								{/* {hover ? <IoCopy /> : <ArrowRight />} */}
								<Metamask />
							</Button>
						</CopyToClipboard>
					</HeroBtnWrapper>
					<Snackbar
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						TransitionComponent={Slide}
						open={open}
						autoHideDuration={3000}
						onClose={handleClose}
						message="Adazeus Address Copied!"
						action={
							<IconButton onClick={handleClose}>
								<MdClose />
							</IconButton>
						}
					/>
				</HeroContentItemKanan>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
