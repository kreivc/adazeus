import React from "react";
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";
import { FaTelegram, FaTwitter, FaPoo } from "react-icons/fa";
import { RiQrScan2Line } from "react-icons/ri";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							Adazeus
						</SocialLogo>
						<WebsiteRights>
							Adazeus &copy; {new Date().getFullYear()} All rights
							reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="https://t.me/AdaZeus"
								target="_blank"
								aria-label="Telegram"
							>
								<FaTelegram />
							</SocialIconLink>
							<SocialIconLink
								href="https://twitter.com/ada_zeus"
								target="_blank"
								aria-label="Twitter"
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="https://poocoin.app/"
								aria-label="PooCoin"
							>
								<FaPoo />
							</SocialIconLink>
							<SocialIconLink
								href="https://bscscan.com/"
								target="_blank"
								aria-label="BscScan"
							>
								<RiQrScan2Line />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
