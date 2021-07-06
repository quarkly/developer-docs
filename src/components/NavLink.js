import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
    margin: 12px 0;
    padding: 36px;
    max-width: 750px;
    color: #000000;
    background-color: #FFFFFF;
    transition: background-color .15s ease;
    text-decoration: none;
    border: 2px solid #EDF2F6;
    border-radius: 12px;
    display: flex;

    &:hover {
        color: #000000;
        background-color: #F8FAFF;
        text-decoration: none;
    }
`;

const Logo = styled.img`
    flex: 0 0 auto;
    margin-right: 24px;
    width: 80px;
    height: 80px;
    object-position: 50% 50%;
    object-fit: contain;
    display: block;
`;

const Text = styled.div`
    flex: 1 1 auto;
    width: 100%;
    display: block;

    .no-margin {
        margin: 0;
    }
`;

const Title = styled.span`
    margin: 0;
    width: 100%;
    font: 400 36px / 1.2 "Source Sans Pro", sans-serif;
    display: block;
`;

const Descr = styled.p`
    padding: 8px 0 0 40px;
    width: 100%;
    font: 400 18px / 1.5 "Source Sans Pro", sans-serif;
    display: block;
`;

const Link = styled.a`
    padding: 4px 0px;
    font-size: 18px;
    text-decoration: none;
    word-wrap: normal;
    color: #0077CC;

    &:hover {
        text-decoration: none;
        color: #4DAEF3;
    }

    &:not(:last-child)::after {
        padding: 0 6px;
        content: '·';
        color: #000000;
    }
`;

const NavLink = ({ logo, href, title, descr, links }) => {
    return (
        <Card href={href}>
            { logo && <Logo src={logo} /> }
            <Text>
                { title && <Title>{title}</Title> }
                { descr && <Descr>{descr}</Descr> }
                { links && 
                    <Descr>
                        { links.map(link => (
                            <Link href={link.href}>{link.name}</Link>
                        ))}
                    </Descr>
                }
            </Text>
        </Card>
    );
};
 
export default NavLink;
