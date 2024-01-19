# USEFUL UNIX COMMANDS

- **ls**: Lists files and directories in the current directory.

  - `ls -l`: detailed information
  - `ls -a`: include hidden files.

- **cd**: Changes the current directory.

  - `cd /home`: navigates to /home directory.
  - `cd ..`: move up one file level.

- **pwd**: Displays the present working directory.

- **cp**: Copies files and directories.

  - `cp file1.txt file2.txt`: copies `file1.txt` to `file2.txt`.

- **mv**: Moves or renames files and directories.

  - `mv oldname.txt newname.txt`: renames `oldname.txt` to `newname.txt`.

- **rm**: **WARNING** Removes files or directories.

  - `rm -r`: recursively delete a directory and its contents.

- **mkdir**: Creates a new directory / folder.

- **rmdir**: **WARNING** Removes an empty directory.

- **find**: Searches for files and directories based on various criteria.

  - `find / -name filename.txt`: searches for `filename.txt` starting from the root directory.

- **cat**: Concatenates and displays the content of files.

  - `cat file.txt`: displays the contents of `file.txt`.

- **tail**: Displays the last part of a file.

  - `tail -n 10 file.txt`: shows the last 10 lines of `file.txt`.

- **head**: Displays the first part of a file.

  - `head -n 10 file.txt`: shows the first 10 lines of `file.txt`.

- **chmod**: **WARNING** Changes the file mode (permissions).

  - `chmod 755 file.txt`: sets read, write, and execute permissions for the owner, and read and execute permissions for others.

- **chown**: **WARNING** Changes the owner of a file or directory.

  - `chown user:group file.txt`: changes the owner and group of `file.txt`.

- **df**: Displays disk space usage for file systems.

- **du**: Displays disk usage of files and directories.

  - `du -sh`: shows the size of each file and directory in human-readable format.

- **kill**: **WARNING** Terminates processes based on process ID or other criteria.

- **htop**: Displays real-time information about system processes, including CPU and memory usage.

- **man**: Displays the manual page for a command.

  - `man ls`: shows the manual for the `ls` command.

- **clear**: Clears the terminal screen.
