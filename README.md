# Adopet by AsonCS

<div align="center">
	<a href="https://adopet-by-asoncs.web.app/" target="_blank">
		<img src="https://github.com/AsonCS/adopet-challenge/raw/dev/public/images/logo_02.svg">
		<br/>
		adopet-by-asoncs.web.app
	</a>
</div>

# Technologies

<div align="center">
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
	<img src="https://img.shields.io/badge/Typescript-404D59?style=for-the-badge&logo=typescript&logoColor=%2361DAFB" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
	<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
	<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
	<img src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=next.js&logoColor=white"/>
	<img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=firebase&logoColor=61DAFB"/>
</div>

# Links

## Public Address

- <a href="https://adopet-by-asoncs.web.app/">Adopet - Inicio</a>

## Trello Boards

- <a href="https://trello.com/b/G1d1XRky/adopet-semana-1-mobile-first">Adopet - Semana 1 - Mobile-first</a>
- <a href="https://trello.com/b/If9zskEu/adopet-semana-2-responsividade">Adopet - Semana 2 - Responsividade</a>
- <a href="https://trello.com/b/hfpdPBXD/semana-3-e-4-javascript">Semana 3 e 4 - Javascript</a>

# About

## Project

	This project was designed by @Alura team 🤙, and I try to implement it 😁.
	This is about a unreal site of pets adoption, where users can donate or adopt pets 🐶🐱🐭🐹🐰 to better of them 😸!!!

## My Challenges

	I am a Android Front-End developer actually, but I have more facility with logic and algorithms, the layout, styles and staff, I have some problems 😅😅😅
	This is why I accept this challenge (I very proud of myself by the way 😁😁😁), I want to improve my ability with layout staff to my professional future 💪👊🤓.

# About Source

## Npm Scripts

- dev: `next dev -H 0.0.0.0`
	- Used on dev time.
- build: `next build`
	- Used to build a production version.
- export: `next build && next export -o ./docs`
	- Used to build a production version and place it on deploy folder.
- serve: `npm run export && firebase serve -o 0.0.0.0 --only hosting`
	- Used to build a production version, place it on deploy folder and server it locally to tests.

## Workflows Scripts

- firebase-hosting-merge.yml:
	- Runs when there is a merge on `main` branch, that script generate a build production and deploy it.
- firebase-hosting-merge.yml:
	- Runs when there is a merge request to `main` branch, that script generate a build production and deploy it to a test address.

## Source Structure

- pages:
	- Where the files and folder structure defines the public urls.
- public:
	- Where the public assets are.
- src:
	- Where the source react styled is.
- src/api:
	- Where the information needed is abstracted from the view
- src/ui:
	- UI source like react components, styled components, hooks and so on.
- src/utils:
	- Some useful code
