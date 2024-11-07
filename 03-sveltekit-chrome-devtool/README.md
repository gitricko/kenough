## Introduction

This is a very simple sveltekit project. For this exercise, the only thing you need to modify is the src/routes/+page.svelte. 

## Building the project

```bash
# To install project dependencies, please do:
npm install
```

## Setup
In order to keep the API_KEY "secret", we write it into a special file called `.env` in this folder. Create that file and put in the following:

```
API_KEY=xxxxxx
```

Replace xxxxxxx with the API_KEY that we shared elsewhere. Doing it this way (instead of writing the value into the code directly) prevents that API_KEYs and other secret information is being stored in the source code repo. The file `.env` is ignored during git commit and push operations(see file `.gitignore`).

```
# To run app, please do:
npm run dev
```

## Self-Learning Resources

- **Chrome devtool**: https://www.youtube.com/watch?v=x4q86IjJFag
- **Svelte**: https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO&ab_channel=NetNinja
- **Sveltekit**: https://www.youtube.com/watch?v=9OlLxkaeVvw&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=1&ab_channel=NetNinja

## Exercise

**Background**: The auto-cash sweep feature for client operating accounts has been implemented, allowing clients to automatically transfer idle cash into investment options that generate returns. However, adoption of this feature has remained low, suggesting that clients may be unaware of its benefits or do not fully understand the potential financial impact of not activating it.

**Objective**: The goal of this RFC is to propose strategies to raise awareness and drive adoption of the auto-cash sweep feature by enhancing the user experience within the bank portal. This should include an intuitive, data-driven interface that clearly communicates the financial advantage of enabling cash sweep.

<img src="static/dashboard-exercise.png" width="75%" height="75%"/>