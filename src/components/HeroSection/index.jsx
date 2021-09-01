import React, { useState } from "react";
import {
	HeroBg,
	HeroContainer,
	HeroContent,
	VideoBg,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	IoCopy,
	ArrowRight,
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
import Image from "../../images/PEE.png";
// import Video from "../../videos/video3.mp4";
import Video from "../../videos/videoB.mp4";
import ParticleBackground from "../ParticleBg";

const HeroSection = () => {
	const [hover, setHover] = useState(false);
	const [open, setOpen] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

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
				{/* <VideoBg
					playsInline
					autoPlay
					loop
					muted
					src={Video}
					type="video/mp4"
				/> */}
				<ParticleBackground />
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
						Adazeus stands for Adazeus. Our trusted community is a
						place where we can Adazeus in safety.
					</HeroP>
					<HeroBtnWrapper>
						<CopyToClipboard text="0x402529CBE402F87Fc1A9c97fAb0aBADa0a6Da334">
							<Button
								primary="true"
								dark="true"
								onMouseEnter={onHover}
								onMouseLeave={onHover}
								onClick={handleClick}
							>
								0x402529CBE402F87Fc1A9c97fAb0aBADa0a6Da334
								{hover ? <IoCopy /> : <ArrowRight />}
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
						message="PEE Address Copied!"
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
