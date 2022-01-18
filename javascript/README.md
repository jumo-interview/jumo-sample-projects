# Javascript Sample Project

## Requirements

To make sure that we can use our time best in the interviews,
we'd like to have you do some setup on your computer in advance.

Start by either _cloning_ or _downloading_ this repository to your computer
via the links on the right
(creating a fork of the repository is not necessary).

For this interview, you will need to have Node.js v17.3 or later installed. Refer to https://nodejs.org/en/download/package-manager/ if you haven't installed it yet.

Install this sample project's requirements:

(Mac or Linux):

```bash
$ npm install
```

On Windows (assuming `cmd.exe`):

```batch
> npm install
```

This repository is using `mocha` as its test framework, as will our project during the interview. Now, verify that you can run the tests of this project:

```bash
$ npm test

> hello@0.0.1 test
> mocha



  Hello
    hello()
      ✔ should return hello world string


  1 passing (5ms)
```


Finally, we recommend you use your IDE of choice during the interview. Make sure you can use it with Javascript, and any additional feature (test explorer, debugger) is setup correctly. You can use this repository to test it out.

Here are some resources for some common IDEs:

* [Javascript/Node.js setup for VSCode](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
* [Javascript/TypeScript setup for Atom IDE](https://ide.atom.io/)
