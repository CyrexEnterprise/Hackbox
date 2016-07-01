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

## rfid-api
The api is being server on
```
http://localhost:8931/
```

## Start using
To start using:
- enter the hack folder
- enter rfid-board folder

```
$ cd hacks/rfid-board
$ npm run static
```

- open your browser in ```http://localhost:8080/```
- start hacking

### Note
To stop the server hit
```
CTRL-C
```

**Happy Coding**
