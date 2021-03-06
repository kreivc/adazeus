import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarGotoP,
	SidebarLinkGoto,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="tokenomics" onClick={toggle}>
						Tokenomics
					</SidebarLink>
					<SidebarLink to="timeline" onClick={toggle}>
						Timeline
					</SidebarLink>
					<SidebarLinkGoto
						href="https://poocoin.app/tokens/0xdb2daf120120d60dc5d08ebb4b06896a238a610a"
						target="_blank"
					>
						Chart
					</SidebarLinkGoto>
					<SidebarLinkGoto
						href="https://t.me/AdaZeus"
						target="_blank"
					>
						Telegram
					</SidebarLinkGoto>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarGotoP
						href="https://pancakeswap.finance/"
						target="_blank"
					>
						Buy On Pancake
					</SidebarGotoP>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
