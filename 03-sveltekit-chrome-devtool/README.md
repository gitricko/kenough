## Introduction

This is a very simple sveltekit project. For this exercise, the only thing you need to modify is the src/routes/+page.svelte. 

## Building the project

```bash
# To install project dependencies, please do:
npm install
```

# Setup
In order to keep the API_KEY "secret", we write it into a special file called `.env` in this folder. Create that file and put in the following:

```
API_KEY=xxxxxx
```

Replace xxxxxxx with the API_KEY that we shared elsewhere. Doing it this way (instead of writing the value into the code directly) prevents that API_KEYs and other secret information is being stored in the source code repo. The file `.env` is ignored during git commit and push operations(see file `.gitignore`).


# To run app, please do:
npm run dev
```

## Exercise
