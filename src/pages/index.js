import React from "react";
import theme from "theme";
import { Theme, Link, Image, Button, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="16px 0 16px 0"
			quarkly-title="Header"
			align-items="center"
			justify-content="center"
			background="#000000"
			color="#000000"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
			/>
			<Link transition="opacity 200ms ease" quarkly-title="Link" href="/" position="relative">
				<Image
					src="https://uploads.quarkly.io/6717c60ce5d277001898cd89/images/picturetopeople.org-70582b114c22e1100df40532ced72b87727ca66a577684ca16.png?v=2024-10-22T15:42:37.618Z"
					width="120px"
					z-index="3"
					height="45px"
					srcSet="https://smartuploads.quarkly.io/6717c60ce5d277001898cd89/images/picturetopeople.org-70582b114c22e1100df40532ced72b87727ca66a577684ca16.png?v=2024-10-22T15%3A42%3A37.618Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6717c60ce5d277001898cd89/images/picturetopeople.org-70582b114c22e1100df40532ced72b87727ca66a577684ca16.png?v=2024-10-22T15%3A42%3A37.618Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6717c60ce5d277001898cd89/images/picturetopeople.org-70582b114c22e1100df40532ced72b87727ca66a577684ca16.png?v=2024-10-22T15%3A42%3A37.618Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6717c60ce5d277001898cd89/images/picturetopeople.org-70582b114c22e1100df40532ced72b87727ca66a577684ca16.png?v=2024-10-22T15%3A42%3A37.618Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6717c60ce5d277001898cd89/images/picturetopeople.org-70582b114c22e1100df40532ced72b87727ca66a577684ca16.png?v=2024-10-22T15%3A42%3A37.618Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6717c60ce5d277001898cd89/images/picturetopeople.org-70582b114c22e1100df40532ced72b87727ca66a577684ca16.png?v=2024-10-22T15%3A42%3A37.618Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6717c60ce5d277001898cd89/images/picturetopeople.org-70582b114c22e1100df40532ced72b87727ca66a577684ca16.png?v=2024-10-22T15%3A42%3A37.618Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end" color="#000000">
				<Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px" />
				<Override
					slot="menu"
					md-top={0}
					md-width="100%"
					justify-content="center"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-left={0}
					lg-transform="translateY(0px) translateX(0px)"
					md-height="100%"
					padding="0px 0 0px 0"
					align-items="center"
				>
					<Override
						slot="item"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
						text-align="center"
						padding="8px 20px 8px 20px"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						md-hover-opacity="1"
						md-active-opacity="1"
						md-color="--dark"
						font="--base"
						text-transform="initial"
						md-font="16px/24px sans-serif"
						text-decoration-line="initial"
						color="--dark"
						transition="opacity .15s ease 0s"
						letter-spacing="0.5px"
						md-opacity=".5"
						md-transition="opacity .15s ease 0s"
						opacity=".5"
						hover-opacity="1"
					/>
					<Override
						slot="link-active"
						md-opacity="1"
						md-cursor="default"
						opacity="1"
						color="--primary"
						cursor="default"
					/>
					<Override slot="item-work" color="#ffffff" />
					<Override slot="link-work" color="#ffffff">
						Contact
					</Override>
					<Override slot="link-contact" color="#ffffff">
						Main
					</Override>
					<Override slot="link-team" color="#ffffff">
						Products
					</Override>
					<Override slot="link-about" color="#ffffff" />
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
				<Override
					slot="icon"
					category="md"
					icon={MdMenu}
					size="36px"
					md-right="0px"
					md-position="relative"
				/>
				<Override
					slot="menu-open"
					md-justify-content="center"
					md-top={0}
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
				/>
			</Components.BurgerMenu>
			<Button
				md-display="none"
				white-space="nowrap"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				font="--base"
				letter-spacing="0.5px"
				z-index="5"
				background="--color-primary"
				padding="8px 18px 8px 18px"
				border-radius="0px"
				hover-transform="translateY(-4px)"
				justify-self="end"
			>
				Contact Us
			</Button>
		</Section>
		<Section
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
			padding="25px 0 75px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				width="100%"
				background="linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,#191C23 url(https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center center/cover repeat scroll padding-box"
				height="620px"
				justify-content="center"
				sm-width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				align-items="center"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
			/>
			<Text
				font="--headline1"
				margin="16px 0px 0px 0px"
				sm-text-align="center"
				sm-width="80%"
				lg-text-align="center"
				lg-font="--headline2"
				color="--light"
			>
				Experiment. Innovate. Elevate.{"\n\n"}
			</Text>
			<Text
				sm-text-align="center"
				sm-width="80%"
				opacity="0.7"
				md-text-align="center"
				font="--lead"
				color="--light"
				margin="10px 0px 35px 0px"
			>
				Make your life easier with our extensive suite of apps for Mac, Windows, and Android
			</Text>
			<Link
				text-decoration-line="initial"
				color="--darkL2"
				padding="12px 24px 12px 24px"
				letter-spacing="0.5px"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				href="#mission"
				background="--color-light"
				font="--base"
				hover-transform="translateY(-4px)"
			>
				Our products
			</Link>
		</Section>
		<Section
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			id="mission"
			padding="90px 0px 100px 0px"
			quarkly-title="About"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			sm-padding="24px 0 24px 0"
			background="--color-dark"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				align-items="center"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				text-transform="uppercase"
				color="--light"
				lg-text-align="center"
			>
				Our Mission
			</Text>
			<Text
				letter-spacing="1px"
				color="--light"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="normal 500 28px/1.2 'AvenirNextCyrRegular', sans-serif"
				margin="0px 0px 0px 0px"
			>
				We empower creators to do their best work while maintaining our uncompromising values while we grow.
			</Text>
		</Section>
		<Section
			md-padding="25px 0px 25px 0px"
			justify-content="center"
			padding="70px 0 70px 0"
			quarkly-title="Info"
			lg-padding="50px 0px 50px 0px"
			color="#ffffff"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				lg-grid-template-columns="1fr"
				display="grid"
				grid-template-columns="2fr 3fr"
				grid-gap="64px"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						font="--base"
						letter-spacing="1px"
						quarkly-title="Title"
						margin="0px 0px 10px 0px"
						color="--dark"
						opacity="0.6"
						lg-text-align="center"
						lg-margin="0px 0px 6px 0px"
						text-transform="uppercase"
					>
						Team
					</Text>
					<Text
						md-font="--headline3"
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--light"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
					>
						Who We Are
					</Text>
					<Text
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--light"
						opacity="0.6"
						lg-text-align="left"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						href="/about"
						color="--light"
						padding="8px 18px 8px 18px"
						text-align="center"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						text-decoration-line="initial"
						font="--base"
						letter-spacing="0.5px"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
					>
						Read More
					</Link>
				</Box>
				<Box
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					md-order="-1"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat"
					margin="0px 0px 0px 0px"
					lg-order="-1"
				/>
			</Box>
		</Section>
		<Section
			sm-padding="24px 0 24px 0"
			background="--color-dark"
			border-style="solid"
			box-sizing="border-box"
			justify-content="center"
			padding="90px 0px 100px 0px"
			border-color="--color-lightD2"
			border-width="1px 0px 1px 0px"
			lg-padding="50px 30px 50px 30px"
			quarkly-title="FAQ"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 48px 0px 48px"
				md-margin="0px 16px 0px 16px"
				align-items="center"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				letter-spacing="1px"
				color="--light"
				opacity="0.6"
				text-align="center"
				lg-text-align="center"
			>
				We're here to help
			</Text>
			<Text
				sm-font="--headline3"
				md-font="--headline3"
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--light"
				text-align="center"
				lg-text-align="center"
				lg-margin="0px 0px 36px 0px"
			>
				FAQ
			</Text>
			<Box
				width="100%"
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(4, 1fr)"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box>
					<Text
						text-align="center"
						md-text-align="left"
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--light"
					>
						Have any questions?
					</Text>
					<Text
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--light"
						opacity="0.6"
						lg-text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						text-align="center"
						md-text-align="left"
						font="--lead"
					>
						Have any questions?
					</Text>
					<Text
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--light"
						opacity="0.6"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						color="--light"
						text-align="center"
						md-text-align="left"
						font="--lead"
						margin="0px 0px 0px 0px"
					>
						Have any questions?
					</Text>
					<Text
						font="--base"
						color="--light"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--light"
						text-align="center"
						md-text-align="left"
					>
						Have any questions?
					</Text>
					<Text
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--light"
						opacity="0.6"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 50px 0" background="--color-dark" quarkly-title="Footer-17">
			<Override slot="SectionContent" justify-content="flex-start" />
			<Box
				display="flex"
				lg-width="100%"
				flex-direction="row"
				lg-flex-direction="column"
				justify-content="space-between"
				width="100%"
				padding="0 0px 0 0px"
				sm-flex-direction="column"
				sm-padding="0 0px 0 0px"
			>
				<Box
					lg-margin="0px 0px 0px 0px"
					width="50%"
					display="flex"
					lg-width="70%"
					sm-width="100%"
					flex-direction="column"
					padding="0px 50px 0px 0px"
					lg-padding="0px 0 0px 0px"
					sm-margin="0px 0px 35px 0px"
				>
					<Text margin="0px 0px 20px 0px" font="normal 500 18px/1.5 --fontFamily-sans" color="--light" letter-spacing="1px">
						ABOUT US
					</Text>
					<Text
						margin="0 0px 35px 0px"
						font="--base"
						color="#c3c8d0"
						sm-text-align="left"
						sm-margin="0 0px 0 0px"
						lg-max-width="640px"
					>
						Here, you can find all the information you need to get in touch with us. Whether you have a question, comment, or suggestion, we are always happy to hear from our customers.
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					grid-template-columns="repeat(2, 1fr)"
					grid-gap="54px"
					lg-align-items="start"
					md-grid-template-columns="repeat(3, 1fr)"
					md-grid-gap="36px 34px"
					sm-grid-template-columns="1fr"
					sm-grid-gap="16px 0"
					justify-content="flex-end"
					sm-flex-direction="column"
					display="flex"
					lg-justify-content="flex-start"
					lg-display="flex"
				>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						margin="0px 50px 0px 0px"
						align-content="start"
						grid-gap="10px 0"
					>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#ffffff"
							letter-spacing="1px"
						>
							ABOUT
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#ffffff"
							letter-spacing="1px"
						>
							PRODUCTS
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#ffffff"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
							letter-spacing="1px"
						>
							CONTACT
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#ffffff"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
							letter-spacing="1px"
						>
							MAIN
						</Link>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				justify-content="space-between"
				padding="50px 0px 0px 0px"
				border-color="#232a44"
				md-padding="30px 0px 0px 0px"
				md-flex-direction="column"
				lg-padding="40px 0px 0px 0px"
				align-items="flex-end"
				height="auto"
				md-align-items="flex-start"
			>
				<Text margin="0px 0px 0px 0px" font="--base" color="#c3c8d0" md-margin="0px 0px 25px 0px">
					© 2024 minty's experiment lab, All rights reserved..
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});