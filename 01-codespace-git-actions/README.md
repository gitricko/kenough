## Lesson 1: CodeSpace, Git, and GitHub’s Action (CICD)

### Prerequisites
- Create a free GitHub account.
- Install Chrome (preferred) or Firefox.
- Any operating system with a web browser and internet connection.

### Self-Learning Resources
- GitHub Issues: https://youtu.be/fFrq28RY1SQ?si=ZEPmR_PHblEcWS91
- CodeSpace: https://www.youtube.com/watch?v=kvJf8s18Vr4
- Git: https://youtu.be/8JJ101D3knE?si=ks_gQbGxgTw9YhMg

### CodeSpace

### What is CodeSpace?
CodeSpace is essentially Visual Studio Code (VSCode) running in a web browser. It’s an open-source project (https://github.com/coder/code-server).

### What is VSCode?
VSCode is an Integrated Development Environment (IDE) that helps you manage files and run code. It’s like having a dedicated tool for coding.

### Exercises:

#### Create some code
- Create a subdirectory under this directory with a unique name (your name is fine).
- Inside that folder, create a file called `hello.html`.
- Add any HTML content to the file.
- Open a terminal and navigate to the current directory with `hello.html`.

#### Launch a web server
- Run the following command in the terminal: `python -m http.server 8000`
- Check out your web server in CodeSpace.

## Git

### What is Git?
Git is essentially a database that stores and versioned code and files. We can think of it as a time machine that allows us to travel back and forth in time to different versions of our code.

### Common Git Commands

#### git clone*
- This command is used to copy the code and files from a remote repository to your local machine.
- You usually only need to run this command once, and CodeSpace has already done it for you.

#### git checkout -b (creating a branch)
- This command creates a new branch in your Git repository.
- You can use branches to organize your code and work on different features separately.
- You’re creating a branch or an alternate reality for the content (story) from the main storyline.

#### git commit -m (saving your work locally)
- Every time you commit changes to files or content, think of it as recording an event in the timeline.

#### git push (saving your work remotely and sharing)
- Every time you use git push, you’re essentially saving your work remotely and sharing it with other engineers to see your changes.
- In the time-travel/multi-verse analogy, you’re essentially publishing your timeline or universe for others to see.

#### git merge to stable branch (pull request)
- You’re merging the commits (content) from one branch (usually main) to another branch. The goal is to have one branch have the code for development.
- In the time-travel/multi-verse analogy, you’re trying to merge two timelines into one unified reality. If the same events (content) are altered differently, you need to fix that event to prevent the universe from being broken.

### Exercises:

#### Create a new branch (from main)
- You should already be in the main branch in Codespace.
- In the terminal, run `git checkout -b myfeat/myusername`. You’ve created an alternative reality locally.
- Publish this reality by running `git push`.
- Run the alert since this branch isn’t in the remote yet. In the future, you’ll only need to run `git push`.

#### Create a pull request and observe GitHub Actions (Action Tab) in action.
- Initiate a pull request (PR) based on your modifications to the `main` branch.
- Compose some text or provide an explanation in your PR. Refer to this [example](https://github.com/gitricko/kenough/pull/2) for reference.
- Create and save the PR. Then, navigate to the Action tab to monitor the progress.
- Attempt to fail the build by creating another PR by renaming your `hello.html` file to `hello2.html` and observe the resulting outcome.
