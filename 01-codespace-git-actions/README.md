# Lesson 1: CodeSpace, Git, GitHub's Action (CICD)

## Prerequisite
- Register a free GitHub account
- Chrome (preferable) or Firefox
- Operating system: Any as you have a browser and internet connections

## CodeSpace

### What is codespace ?
It is just Visual Studio Code (VSCode) in a web browser? VSCode on web is opensource.

### What is VSCode ?
- It is a Integrated Development Environment (IDE). Heard about Eclipse or Intelli-J ?
- Essenstially, it is a app that manages files and run code

### Exercises:

#### Create some code
- Create a sub-directory under this directory with a unique-name (your name is fine)
- Inside that folder, create a file called `hello.html`
- Put any HTML content in there.
- open a terminal, make sure you navigate to the current directory with `hello.html`

#### Launch a web-server
- run: `python -m http.server 8000`
- Check out your web-server in codespace.

## Git

### What is Git ?
It is essentially a database for storing and versioning code/files. We shall use time-traveling and multi-verse as an analogy

### Common git commands

#### git clone*
- You are copying the code/files databse from remote to your localhost
- Usually you do it once and in codespace, you have already did it.

#### git checkout -b (creating a branch)
- You are creating a branch or an alternate reality for the content (story) from the `main` story line

#### git commit -m (saving your work locally)
- Everytime you commit changes to files/content, think of it as creating a recorded event in the time-line.

#### git push (saving your work remotely and sharing)
- Everything you do a `git push` you are essentially saving your work remotely and sharing it to other engineers to see your changes. 
- In time-travel/multi-verse analogy, you are publishing your time-line or universe for other to see.

#### git merge to stable branch (pull request)
- You are merging one branch commits (content) to another branch (usually `main`). The objective is to have one branch to have the code for development
- In time-travel/multi-verse analogy, you are trying to merge 2 time-line into one unified reality. If the same events (content) is alter different, you need to fix this event so that the universe is not broken.

### Exercises:

#### Create a new branch (from main)
- You should be already in `main` branch in codespace
- In terminal, run `git checkout -b myfeat/myusername`. You use created an alternative really locally
- Publish this reality, run `git push`
- run the alert since this branch is not in the remote yet. In future, `git push` will suffice...

#### Commit your code (your hello.html)
- run `git add .` and it will put all changes into tempory queue for saving
- run `git commit -m "short desc"` , will save your changes (creating an event) locally
- run `git push`, now it will be save the commit in the remote server and every can see your changes from the branch
- Keep making changes to your `hello.html` file and keep committing and pushing.

#### Creating a merge to `main` branch (Pull Request)
- Go to GitHub to create a pull request and get somebody to approve it.





