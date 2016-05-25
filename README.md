# Hackbox
Vagrant box to base hackathons on

## Installation
Install the latest version of [Vagrant](https://www.vagrantup.com/downloads.html) and also install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) (this will be our provider).


## Run box
```
$ vagrant up
```

Start coding with in the repository path and all the files will be synced with the /vagrant path in the guest box

If you need to run any program in the box, just SSH it:

```
$ vagrant ssh
```

In your home directory should be a folder named `hacks` where you can start creating your hacks.


## Start using
To start using:
- enter the hack folder
- start a new ionic application
- go into the project folder
- add the need plugin
- add the platform you'll be running the app on
```
ionic start project-name blank
cd project-name
ionic plugin add ../ImageDetectionCordovaPlugin
ionic platform add android
```
**And you ready to go...

Happy Coding**
