# Python Sample Project

## Requirements

To make sure that we can use our time best in the interviews,
we'd like to have you do some setup on your computer in advance.

Start by either _cloning_ or _downloading_ this repository to your computer
via the links on the right
(creating a fork of the repository is not necessary).

For this interview, you will need to have Python 3.5 or later installed. Python 3.10 and later versions are not supported. See the [RealPython installation guide] if you haven't installed it yet.

We'll start by creating a [virtual environment] with [venv], and install some requirements that might be useful.

> If for some reason you must use Python 2.7,
> use [virtualenv] to create the virtual environment.

Create a new Python 3 environment called `interview_env` and _activate_ it

(Mac or Linux):

```bash
$ python3 -m venv ./interview_env
$ source ./interview_env/bin/activate
```

On Windows (assuming `cmd.exe`):

```batch
> python -m venv .\interview_env
> .\interview_env\Scripts\activate
```

Next, install this sample project's requirements:

```bash
$ pip install -r requirements.txt
```

This repository is using `pytest` as its test framework, as will our project during the interview. Now, verify that you can run the tests of this project:

```bash
$ pytest
============================================================================================ test session starts ============================================================================================
platform darwin -- Python 3.8.3, pytest-6.1.2, py-1.9.0, pluggy-0.13.1
rootdir: /home/me/mydir
collected 1 item

tests/test_hello_world.py .                                                                                                                                                                           [100%]

============================================================================================= 1 passed in 0.01s =============================================================================================
```


Finally, we recommend you use your IDE of choice during the interview. Make sure you can use it with Python, and any additional feature (test explorer, debugger) is setup correctly. You can use this repository to test it out.

Here are some resources for some common IDEs:

* [Python Setup for VSCode](https://code.visualstudio.com/docs/python/python-tutorial)
* [Python Setup for PyCharm](https://www.jetbrains.com/help/pycharm/run-debug-configuration-py-test.html)
* [Python Setup for Eclipse](https://www.pydev.org/manual_101_root.html)

[RealPython installation guide]: https://realpython.com/installing-python/
[virtual environment]: https://realpython.com/python-virtual-environments-a-primer/
[venv]: https://docs.python.org/3/library/venv.html
[virtualenv]: https://virtualenv.pypa.io/en/latest/installation.html
