# Hackbox
Vagrant box to base hackathons on

## Installation
Install the latest version of [Vagrant](https://www.vagrantup.com/downloads.html) and also install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) (this will be our provider).


## Run box
```
$ vagrant up
```

Start coding in the repository path and all the files will be synced with the /vagrant path in the guest box

If you need to run any program in the box, just SSH it:

```
$ vagrant ssh
```

If you need to completly remove:

```
$ vagrant destroy
$ vagrant box remove ubuntu/trusty64
```

In your home directory should be a folder named `hacks` where you can start creating your hacks.
(this folder should be linked to an `hacks` folder in the root of this repository)

## Start using
To start using:
- enter the hack folder
- enter geohack folder
- start ionic serve
- choose **option 1 eth0** (an ip address)

```
$ cd hacks/geohack
$ ionic serve
```

- open your browser in ```http://localhost:8100/```

<hr>
You can sync your data. Just copy it into `ionic-heatmap` folder in the hacks folder and push it using git.

**Note:**
Before runnig this commands you'll mostt likely need to tell git who you are by running and adding you github account information:
```
$ git config --global user.email "you@example.com"
$ git config --global user.name "Your Name"
```

Using the commands bellow you will:
- Get the latest data from the repository if there's any.
```
$ cd /home/vagrant/hacks/ionic-heatmap
$ git pull
```

- Add all the new data you just added.
```
$ git add --all
```

- Commit the changes to your local git with a message.
```
$ git commit -m "adding more data"
```

- Push all the changes to the remote repository.
```
$ git push origin master
```
- You'll be prompt to enter your github username and password.
<hr>

- start hacking

**Happy Coding**
