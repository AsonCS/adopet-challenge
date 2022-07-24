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
	<img src="https://img.shields.io/badge/Sha256-F7DF1E?style=for-the-badge"/>
</div>

# Links

### Public Address

-   <a href="https://adopet-by-asoncs.web.app/" target="_blank">Adopet - Inicio</a>

### Trello Boards

-   <a href="https://trello.com/b/G1d1XRky/adopet-semana-1-mobile-first" target="_blank">Adopet - Semana 1 - Mobile-first</a>
-   <a href="https://trello.com/b/If9zskEu/adopet-semana-2-responsividade" target="_blank">Adopet - Semana 2 - Responsividade</a>
-   <a href="https://trello.com/b/hfpdPBXD/semana-3-e-4-javascript" target="_blank">Semana 3 e 4 - Javascript</a>

# About

### Project

This project was designed by @Alura team 🤙, and I tried to implement it 😁.
This is about a unreal site of pets adoption, where users can donate or adopt pets 🐶🐱🐭🐹🐰 for the happiness of them 😸!!!

### My Challenges

I am a Android Front-End developer, but I have more facility with logic and algorithm. For the layout things, I have some difficulties 😅😅😅
This is why I accepted this challenge, I want to improve my ability with layout things to my professional future 💪👊🤓.

# About Source

### User Information

-   The user information is stored in `browser local storage`.
-   The signed user information is stored in `browser session storage`.
-   In both `browser local storage` and `browser session storage` just the `sha256` of the user password is stored, so that information is not stored in clear text.
-   In both `browser local storage` and `browser session storage` the store the base64 string of user image.

### Npm Scripts

-   dev: `next dev -H 0.0.0.0`
    -   Used on dev time.
-   build: `next build`
    -   Used to build a production version.
-   export: `next build && next export -o ./docs`
    -   Used to build a production version and place it on deploy folder.
-   serve: `npm run export && firebase serve -o 0.0.0.0 --only hosting`
    -   Used to build a production version, place it on deploy folder and server it locally to tests.

### Workflows Scripts

-   firebase-hosting-merge.yml:
    -   Runs when there is a merge on `main` branch, that script generate a production build and deploy it.
-   firebase-hosting-merge.yml:
    -   Runs when there is a merge request to `main` branch, that script generate a production build and deploy it to a test address.

### Source Structure

-   pages:
    -   Where the files and folder structure defines the public urls.
-   public:
    -   Where the public assets are.
-   src:
    -   Where the source in react way is.
-   src/api:
    -   Where the information needed is abstracted from the view layer.
-   src/ui:
    -   UI source, like react components, styled components, hooks and so on.
-   src/utils:
    -   Some useful code.

### Functionalities

-   <a href="https://adopet-by-asoncs.web.app/" target="_blank">Root Page</a>
    -   Signed user
        -   `Página de pets` button go to Home.
    -   Not signed user
        -   `Já tenho conta` button go to Login.
        -   `Quero me cadastrar` button go to Registration.
-   <a href="https://adopet-by-asoncs.web.app/login.html" target="_blank">Login</a>
    -   If user is signed in, redirect to Home
    -   `Entrar` button consult browser local storage looking for the user information with given email and password, if it exists, set browser session storage with that user, and redirect to Home
    -   `Esqueci minha senha.` button go to Registration with given email, if browser local storage has that email, pre-fill the registration fields.
-   <a href="https://adopet-by-asoncs.web.app/registration.html" target="_blank">Registration</a>
    -   If user is signed in, redirect to Home
    -   `Cadastrar` button save the given information in browser local storage, set browser session storage with that user, and redirect to Home.
    -   If `email` url query is present, and if browser local storage has that email, pre-fill the some fields.
-   <a href="https://adopet-by-asoncs.web.app/home.html" target="_blank">Home</a>
    -   If user is not signed in, redirect to Index.
    -   List all pets from a requested json file.
    -   By clicking on one pet, go to Messages with that pet selected.
-   <a href="https://adopet-by-asoncs.web.app/messages.html" target="_blank">Messages</a>
    -   If user is not signed in, redirect to Index.
    -   Pre-fill some fields with signed user information.
    -   If `petId` url query is present, select that pet.
-   <a href="https://adopet-by-asoncs.web.app/profile.html" target="_blank">Profile</a>
    -   Pre-fill the fields with signed user information.
    -   By clicking on user image in form, is possible change it.
    -   `Salvar` button save current user information
    -   By clicking on user image in Header, is possible sing out.
