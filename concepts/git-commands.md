# Useful Git Commands

1. **git init**: Initializes a new Git repository. This command creates a new `.git` directory in your project, which houses all of your repository's configurations and history.

2. **git clone [url]**: Creates a copy of an existing Git repository from a remote location. For example, `git clone https://github.com/user/repo.git`.

3. **git add [file]**: Stages changes in the specified file for the next commit. Use `git add .` to stage all changes in the current directory.

4. **git commit -m "[message]"**: Commits the staged changes to the repository with a descriptive message. For example, `git commit -m "Fixed bug in payment processing"`.

5. **git status**: Shows the status of changes as untracked, modified, or staged.

6. **git push [remote] [branch]**: Pushes committed changes to a remote repository. For example, `git push origin master` pushes changes to the `master` branch of the `origin` remote.

7. **git pull [remote] [branch]**: Fetches changes from a remote repository and merges them into the current branch. For example, `git pull origin master`.

8. **git branch**: Lists all local branches in the repository. Use `git branch [branch-name]` to create a new branch and `git branch -d [branch-name]` to delete a branch.

9. **git checkout [branch-name]**: Switches to the specified branch. Use `git checkout -b [branch-name]` to create and switch to a new branch.

10. **git merge [branch]**: Merges the specified branch into the current branch.

11. **git diff**: Shows the differences between the working directory and the staging area or between two branches.

12. **git log**: Displays the commit history. Use `git log --oneline` for a condensed view.

13. **git reset [file]**: Unstages the specified file, but preserves its contents. `git reset --hard` reverts the working directory to the last committed state.

14. **git fetch [remote]**: Downloads all the changes from a remote repository but doesn't merge them into your current branch.

15. **git rebase [branch]**: Reapplies commits on top of another base tip, which is useful for maintaining a clean project history.

16. **git stash**: Temporarily stores modified, tracked files in order to switch branches without committing.

17. **git rm [file]**: Removes files from the working directory and stages the deletion.

18. **git remote add [name] [url]**: Adds a new remote repository. For example, `git remote add origin https://github.com/user/repo.git`.
