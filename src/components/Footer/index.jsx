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
                            PEE
                        </SocialLogo>
                        <WebsiteRights>
                            PunkEtherEarn &copy; {new Date().getFullYear()} All
                            rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="https://t.me/PunkEtherEarn"
                                target="_blank"
                                aria-label="Telegram"
                            >
                                <FaTelegram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://twitter.com/PunkEtherEarn_"
                                target="_blank"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://poocoin.app/tokens/0x402529cbe402f87fc1a9c97fab0abada0a6da334"
                                target="_blank"
                                aria-label="PooCoin"
                            >
                                <FaPoo />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://bscscan.com/address/0x402529cbe402f87fc1a9c97fab0abada0a6da334"
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
