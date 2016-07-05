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
- enter vagrant machine
- enter the hack folder
- enter angular2 folder

```
$ vagrant ssh
$ cd hacks/angular2
$ npm run start
```

- open your browser in `http://localhost:8000/`
- start hacking

## Resources
- https://angular.io/docs/ts/latest/quickstart.html
- https://angular.io/docs/ts/latest/tutorial/index.html
- https://egghead.io/lessons/angular-2-writing-a-simple-angular-2-component
- https://www.youtube.com/watch?v=HTFZPF6iixA&list=PLgGUMhSgtxJyIQ4vI3BzlCzZLHL79Ew6p

**Happy Coding**
