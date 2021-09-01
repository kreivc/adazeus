import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesH1,
    ServicesP,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
} from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Best Tokenomics</ServicesH2>
                    <ServicesP>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Best Team</ServicesH2>
                    <ServicesP>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Still Early</ServicesH2>
                    <ServicesP>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
