import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
	margin: 12px 0;
	padding: 36px;
	max-width: 750px;
	color: #000000;
	background-color: #ffffff;
	transition: background-color 0.15s ease;
	text-decoration: none;
	border: 2px solid #edf2f6;
	border-radius: 12px;
	display: flex;

	&:hover {
		color: #000000;
		background-color: #f8faff;
		text-decoration: none;
	}

	@media screen and (max-width: 996px) {
		padding: calc(16px + 2vw);
	}

	@media screen and (max-width: 479px) {
		flex-direction: column;
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

	@media screen and (max-width: 479px) {
		margin-bottom: 18px;
	}
`;

const Main = styled.div`
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
	font: 400 36px / 1.2 'Source Sans Pro', sans-serif;
	display: flex;

	@media screen and (max-width: 575px) {
		font-size: 24px;
	}
`;

const Descr = styled.p`
	padding: 8px 0 0 ${({ icon }) => (icon ? '50px' : '0')};
	width: 100%;
	font: 400 18px / 1.5 'Source Sans Pro', sans-serif;
	flex-wrap: wrap;
	display: flex;

	@media screen and (max-width: 575px) {
		padding-left: 0;
	}
`;

const Icon = styled.span`
	padding-right: 8px;
	width: 48px;
	text-align: right;
	display: inline-block;

	@media screen and (max-width: 575px) {
		width: initial;
	}
`;

const Name = styled.span`
	display: inline-block;
`;

const Text = styled.span`
	display: inline-block;
`;

const Link = styled.a`
	padding: 2px 6px 2px 0px;
	font-size: 18px;
	text-decoration: none;
	white-space: nowrap;
	color: #0077cc;
	position: relative;

	&:hover {
		text-decoration: none;
		color: #4daef3;
	}

	span {
		white-space: initial;
	}

	&:not(:last-child)::after {
		padding-left: 6px;
		content: '·';
		color: #000000;
		display: inline-block;
	}
`;

const NavLink = ({ href, logo, icon, name, text, links }) => {
	return (
		<Card href={href}>
			{logo && <Logo src={logo} />}
			<Main>
				{(icon || name) && (
					<Title>
						{icon && <Icon>{icon}</Icon>}
						{name && <Name>{name}</Name>}
					</Title>
				)}
				{(text || links) && (
					<Descr icon={icon}>
						{text && <Text>{text}</Text>}
						{links &&
							links.map((link) => (
								<Link href={link.href}>
									<span>{link.name}</span>
								</Link>
							))}
					</Descr>
				)}
			</Main>
		</Card>
	);
};

export default NavLink;
