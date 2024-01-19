# USEFUL UNIX COMMANDS

_ls_: Lists files and directories in the current directory.
<br>
ls -l detailed information <br>
ls -a include hidden files. <br>

_cd_: Changes the current directory.<br>
cd /home -> /home directory. <br>
cd .. -> to move up one file level <br>

_pwd_: Displays the present working directory.

_cp_: Copies files and directories.<br>
cp file1.txt file2.txt copies file1.txt to file2.txt.

_mv_: Moves or renames files and directories. <br>
mv oldname.txt newname.txt <br>e.g. renames oldname.txt to newname.txt.

_rm_: **WARNING** Removes files or directories. Use rm -r to recursively delete a directory and its contents.

_mkdir_: Creates a new directory / folder.

_rmdir_: **WARNING** Removes an empty directory.

_find_: Searches for files and directories based on various criteria. <br>For example, find / -name filename.txt searches for filename.txt starting from the root directory.

_cat_: Concatenates and displays the content of files. <br>For example, cat file.txt displays the contents of file.txt.

_tail_: Displays the last part of a file. tail -n 10 file.txt shows the last 10 lines of file.txt.

_head_: Displays the first part of a file. head -n 10 file.txt shows the first 10 lines of file.txt.

_chmod_: **WARNING** Changes the file mode (permissions). For example, chmod 755 file.txt sets read, write, and execute permissions for the owner, and read and execute permissions for others.

_chown_: **WARNING** Changes the owner of a file or directory. For example, chown user:group file.txt changes the owner and group of file.txt.

_df_: Displays disk space usage for file systems.

_du_: Displays disk usage of files and directories. For example, du -sh shows the size of each file and directory in human-readable format.

_kill_: **WARNING** Terminates processes based on process ID or other criteria.

_htop_: Displays real-time information about system processes, including CPU and memory usage.

_man_: Displays the manual page for a command. For example, man ls shows the manual for the ls command.
