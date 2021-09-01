import React from "react";
import {
    InfoContainer,
    InfoRow,
    Column1,
    Column2,
    ImgWrap,
    InfoWrapper,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Img,
    DescT,
    DescTWrapper,
} from "./infoElements";

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <DescTWrapper>
                                    <DescT>{d1}</DescT>
                                    <DescT>{d2}</DescT>
                                    <DescT>{d3}</DescT>
                                    <DescT>{d4}</DescT>
                                    <DescT>{d5}</DescT>
                                    <DescT>{d6}</DescT>
                                </DescTWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
