Mining Social and Geographic Datasets
-----------------------------------
GEOG0051 Computer Lab 1.1
-------------------------------

Note: Notebook might contain scripts and instructions adapted from GEOG0115, GEOG0051. 
Contributors: Stephen Law, Mateo Neira, Nikki Tanu, Thomas Keel, Gong Jie, Jason Tang and Demin Hu.

## Introductory Note

Welcome to the first of your weekly coding notebooks for this module! In general, these notebooks are structured with a **Notebook** section to begin, where you will be introduced to new code and functions, and an **Exercise** section, where you will be expected to apply what you have just covered in the *Notebook* section. This is designed to facilitate your independent learning of the syntax of Python and the use of relevant packages and functions, but how much and how quickly you learn also **depends on you** and the initiative you take to practice. 

Although sample answers will be provided a few days after the coding notebooks are first released, you are strongly encouraged to attempt the questions before checking the possible solutions. You learn most and best by having attempted to do something, even if you don't get to the end the first time.

Another important skill for you to develop through the module is to make use of **online resources** and to learn to troubleshoot errors that you might face in your code. Python is perhaps the most widely used programming language there is, and so you will find extensive material, answers to questions and guides to doing particular things with Python packages on online websites and forums, including the like of **StackOverflow**. For this reason **Google** is a powerful tool at your disposal and otherwise, there will of course be support from the teaching team as well as mutual help from/for your fellow students on the course.

With that, let us begin with Week 1 and we wish you a happy and productive session learning.

**Parts of this lecture is made for students that are not familiar with computing in Python. Contents here will act as a review for those that are familiar with the programming language or taken GEOG0115.**

Overview of Content in this Jupyter Notebook
===============
> ### Installation & Setting Up of Workspace

> ### Lab Notebook 1.1: A First Look at Python - Python Data Types, Basic Operators and Keywords

> ### Lab Exercise 1.1: Assignments and Basic Operations

### Installation & Setting Up of Workspace

1. For students of GEOG0115 (Term 1) or students that have Anaconda/Miniconda installed, skip to step 3.

2. **Download and Install Anaconda** for your operating system from [this site](https://www.anaconda.com/products/individual). Anaconda is one of the most popular Python distribution platforms used and it provides both a graphical user interface (which you can click on) and a command prompt (in which you type commands) to manage your installation of Python packages.

3. In the terminal, **create a new virtual environment** for the module=envGEOG0051 with the following script that contains various libraries. _(N.B. For Windows users, you can type "Anaconda Prompt" in the Windows search box to launch the terminal to type the code below.)_
```console
conda create -n envGEOG0051 -c conda-forge geopandas scipy jupyter scikit-learn nltk networkx osmnx matplotlib seaborn spint contextily spyder folium gitpython gensim scikit-surprise
```
We create a separate environment for this course such that, for instance, if you had other modules or projects that could also use Python, and required some specific packages to be in a different version than we are using here, the separation would avoid any issues of incompatibility.  

Note that ```jupyter``` is a different library from ```jupyter-lab```, and we decided against using the latter because it caused some problems, from experience.

4. Activate the envGEOG0051 virtual environment. 
```console
$source activate envGEOG0051
```
To launch into this environment, every time you launch your terminal/anaconda prompt, you should always see ```(envGEOG0051)``` preceding the code line on which you are typing your command. If that doesn't show, then you would need to activate the environment, as shown in this step.


5. Launch Jupyter Notebook by typing in the command ```jupyter-notebook```

```console
(envGEOG0051)$jupyter-notebook
```

6. Check if all necessary libraries are installed. You could also run the code chunk immediately below this (which contains all Python packages we will use throughout this course) to test if your Conda installation has been successful.

```python
import numpy as np
```

N.B. If you are interested in understanding more about what Conda environments are, you could look at [this site](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html).


```python
### test installation - if no errors return and a [number] shows up to the left of this cell, your installation has succeeded

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import networkx as nx
import osmnx as ox
import sklearn
import folium
import nltk
```

Lab Notebook 1: A First Look at Python
-------------------------------


**Python** is an extremely popular and versatile high-level programming language that was created by Guido Van Rossum in the 90s. It is a general-purpose language focusing on procedural programming *(on which we will focus)* and object-oriented programming. If these terms don't immediately make sense to you, don't worry at all because their definitions are not most important. If you are interested, though, have a read on Google.

Those of you attending this course would come from a range of coding backgrounds - some of you would have had a term's experience with Python, more of you would have had only substantial coding experience with R but little with Python, and perhaps others among you fall elsewhere on the Spectrum. This week's (and also Week 2's) material is designed to be a gentle introduction to basic sensibilities of coding in Python. 

For those of you who are already confident in Python basics, feel free to jump ahead to the **Lab Exercise** section and decide for yourselves if attempting them has any value to your learning. For those of you who have had experience in R, you will find Python is similar in many aspects in its logic, however with different syntax - knowing them is like knowing two spoken languages that are related, but far from identical. Along your journey of learning Python, then, try to find **parallels** in the two coding languages, and notice **equivalents** - i.e. how two functions, written differently in R and Python, do pretty much the same thing. Creating these links will both quickly boost your proficiency and confidence with working in Python.

We first begin with the very basic function of `print()`, which had been mentioned in the lecture.


```python
print ("hello world")
```

    hello world
    

And moving a step up, we assign the string value `"hello world"` to a variable, `x`, that then sits in the memory of the jupyter notebook.


```python
x = "hello world"

id(x) # and by using the keyword id we can find out where the variable x sits in memory.
```




    2955797319216



### Basic Data Types

As mentioned before, Python is an object-oriented programming language, and the objects that exist in the Python memory (such as the variable `x` which we created earlier) come in a variety of object types. Below are examples of some common types of data you will encounter, and if you would like to do further reading, click on [this list of Basic Object Types](https://www.pythonlikeyoumeanit.com/Module2_EssentialsOfPython/Basic_Objects.html).

**Strings:** an ordered sequence of alphanumeric characters. 
```python
Sample_string = "Hello world! Today is the 23rd day of September"
```
Note how the automatic colouring that Python does for you helps you to track if anything is wrong with your code. For instance, if you had forgotten to close the first inverted comma, everything you write from thereon would remain as red/brown coloured test and be treated as a continuation of your string value.

**Integers :** Positive/Negative whole numbers 
```python
sample_int = 3619
```

**Floats:** Real number with floating point. This category can include integers, but also non-integer numbers.
```python
Sample_float= 1.126
```

**Boolean:** binary objects with one of two values: they are either `=True` or `=False`
```python
Sample_bool = True
```
One use case is if we wanted to do analysis whereby it was important to distinguish between two categories of observations, boolean objects come in handy. For instance, if we wanted to differentiate UCL students from non-UCL students, we could create a variable called `ucl_student` that would take on the value `=True` for UCL students and `=False` for otherwise.



```python
# strings (text)
x = "what year is it?"
print (x) #prints the stored value
```

The function `type()` is included in base Python (i.e. without you needing to import any additional packages) and tells us the object type of an object that we put as an argument, within the parantheses. Some errors may occur because you try to apply a function onto an object that does not comply with what object type(s) the function demands, and so remember to use `type()` to understand your data before proceeding.


```python
type(x) #str tells us that object 'x' is a string object
```

By enclosing a number enclosed in square brackets `[]` after calling a string object, we can access an individual element (alphanumeric character) that comprises the string. Note that indexing in Python starts at **0** rather than 1, meaning `x[0]` gives us the first element of `x` and so on.


```python
# you can access each character of a string through an index
# first element
print (x[0])

# second element
print (x[1])

# two individually
print (x[0], x[1])

# two together
print (x[0:2])
```

Objects of integer or float types can also be assigned, called and `print()`-ed in the same way that string objects can.


```python
# numeric (integer/float)
a = 18
b = 32
c = 30.00
print (a,b,c)
```


```python
type(a) #int means integer
```

#### 🤨 TASK
what is the data type for c?   
*Replace the `???` below with your answer*


```python
???
```

## Basic Python Operators

These operators will help you transform and convert between variables, or calculate something that is based on more than one object/ one element within a list of numeric types.

**Assignment operators :** ```= ```

**Arithmatic operators :** ```+ , - , * , / , ** , %```

**Comparison operators :** ```== , != , < , <= , > , >=```
Note how, when you want to use `==` as a comparison operator, e.g. to state a condition that, when x **EQUALS** y, then we use a double equal sign, rather than a single one (`=`) which is used for assignment of variables

**Logical operators :** ```and , or```


```python
# arithmatic operators
x = 5
y = 6
z = x+y

print(z)
```


```python
# comparison operator
print (z == x) #generates either TRUE or FALSE
```


```python
# logical operator
x < y or y < z #generates TRUE if both of these conditions are fulfilled; FALSE otherwise
```

More than simply for summing numerical values, `+` can also be used to concatenate, or join, one or more strings or strings that are stored as Python objects.


```python
#arithmatic operators do not work with strings
x = "Model 1 accuracy:"
y = "100%"

#with the exception of `+`
print (x + ' ' + y)
```

## Python Keywords

Python has a set of **keywords** that are reserved words, of which some you will learn today. Notably the `help()` function can be really useful as it gives you a simple guide on how to use certain functions.

While you might not see immediate use of them, they are important to note as they could cause problems, for instance, if you name a variable generically that is coincides with a helpword.


```python
#Python keywords

help("keywords")
```


```python
help("if")
```

## More Python Data Types

In this section, you will be briefly introduced to the more specific names that Python has for different object types, that you might come across when, for example, a function requires an input to be of a specific kind.

**Text :** `str`

**Numeric :** `int, float`

**Boolean :** `bool`

**Sequence :** `list, tuple, range`

**Mapping :** `dict`

**Set :** `set`


```python
#assign values to objects
x=1
y=1.0
z="hello world"
l1=[]

# to find out the data-type you can use the type() function
# we can also generate notification messages that are easier to read, made up of >1 parts
print ('The object `x` is of type',type(x))
print ('The object `y` is of type',type(y))
print ('The object `z` is of type',type(z))
print ('The object `l1` is of type', type(l1))
```

### Lists 

A list is a mutable ordered sequence of items and these items that are therein enclosed are usually referred to as 'elements'. To define a list in Python, you should enclose the list in square brackets and separate each element from its neighbours using commas.

```python
l1 = [1,2,3]
```


```python
#You define a series of lists as follows:

l1 = [42, 23.2, "geography"]

l2 = [1, 2, 3, 4]

l3 = [2, 4, 128, 27, 12, 30, 90, 100, 1, "hello world"]
```


```python
# you can access the elements of the list by its index. here is the first element.
l3[0]
```


```python
# you can access the last element of the list by its index in reverse. 
l3[-1]
```

### Slicing Lists
In Python we are able to subset lists, or **slice** them, based on the index of the elements. Why does, in the example below, slicing a list using `[0:2]` return only 2 elements rather than an expected 3?

Google something along the lines of "*slicing in Python*" to get your answer.


```python
# you can also access the elements of the list by slicing using the colon symbol. 
l3[0:2]
```


```python
# and here is the slice from the second element to the last.
l3[2:]
```


```python
# lists are defined by [] or list()
list1=[1,2,3,4,5,6]

# lists can be sliced
print (list1[1])
print (list1[2:])
```

#### 🤨 TASK
can you get the last three items of the list?  
*Replace the `???` below with your answer*


```python
???
```

We can also make modification to lists. If you aren't already familiar, what do `list.append()` and `list.pop` do? 

Once again, you can use Google to aid your understanding (and learn to be comfortable that many things you won't know, Google will) or use the `help()` function we introduced earlier.


```python
# list methods - pop and append
list1=[1,2,3,4,5,6]
list1.append(7)
list1.pop(2)

print (list1)
```

### Tuples

Tuples refer to ordered collections of one or more items. They are similar to lists in all but the fact that they are **immutable**. As opposed to lists which are defined by square brackets `[]`, we use parantheses `()` to define tuples.

```python
sample_tuples = ("apple", "banana", "cherry")
```


```python
# tuples are defined by () or tuple()
tup1 = (1,2,3,4)
```


```python
# however, note that tuples are immutable - this will return an error
tup1[0] = 1
```

### Dictionary

A dictionary is an unordered collection of data in a key:value pair.  Unlike sequences, which are indexed by a range of numbers, dictionaries are **indexed by keys**, which can be any immutable type: strings and numbers can always be keys. For instance, you may use `ls[0]` to index the first element of `ls`, but you would need the corresponding key of a given element in a dictionary object to index it. Dictionaries are defined using a pair of curly brackets `{}`.

```python
sample_dict = {“key1”: 10}
```

We can only use **inmutable** things as keys, which means that will preclude lists from being used.

```python
sample_dict = {('hello', 'world'): True} #valid - a tuple can be used as the dictionary key
```

```python
sample_dict = {['hello', 'world']: True} #invalid - a list cannot be used
```


```python
# dicts are defined by {key:vaue} or dict()
d1 = {} #creates an empty dictionary object
d1['name'] = "Sally"
d1['age'] = 25
d1['location'] = "London"
print(d1)
```


```python
#access item in dictionary
print(d1['name'])
```


```python
# create a dictionary by enumerating a list
newDict = {} #creates an empty dictionary object
list1 = ['john','sally','steven','matthew','mike','paul','andrew'] #creates a list of strings we want to put into the dictionary

for i,j in enumerate(list1): #using a list, we recursively input the string values from list1 into the dictionary
    newDict[i] = j

newDict #prints the newly created dictionary object
```

### Sets

Sets refer to unordered collections of unique elements. They are also defined using a pair of curly brackets `{}`.

```python
sample_set = {"sally", "age", "sally"}
```


```python
#sets are defined by {} or set()
set1 = {1,1,1,1,10}
set1
```


```python
# sets operations

set1={1,1,1,1,10}
set2={1,1,1,1,20}

print (set1.intersection(set2))
print (set1.union(set2))
print (set1.difference(set2))
```

### Range

A range is an immutable sequence of numbers and is commonly used for looping a specific number of times in a for loop. Its three parameters are as such: ```range("start", "end", "step"/"increment")```. For instance, this will give you a range of integers between 1 to 9 (inclusive) with a `step` *(or increment)* of 1 between each consecutive element.

```python
range(1,10,1)
```


```python
# range
k=range(1,10,2)
k[1]
```

## Control Structures

A control structure is similar to a block of programming that analyses variables and chooses a pathway to follow based on the given parameters that are usually user-defined. It represents the basic decision-making process in computing and  can be implemented through three basic types, namely to sequence the execution of code (i.e. one line after another), selecting/ branching between pathways (used for decisions) and repetition (e.g. for looping).

The examples of control structures we will learn about include:

<img src="flowchart.jpg"> 

<center><b>Fig 1. Flowchart describing the control and flow statements.</b></center>

* **if** (Branching)
* **if/else** (Branching)
* **while** (Looping)
* **for/in** (Looping)

### 'If' statement
Conditional statements in Python are handled by the `if` statement. They allow our code to take one of at least two possible alternatives, depending on whether the condition stated with the `if` statement is fulfilled. The user may choose either to pair the `if` statement with an `else` statement to state what would happen otherwise, but the `else` statement could also be omitted, in which case nothing happens if the `if` statement is unfulfilled.



```python
### if/else conditions
steps=9
if steps==10:
    print ("True")
else:
    print ("False")
```


```python
x=8
y=9
z=10

# multiple conditions
if x>y:
    print (True)
elif y>z:
    print (True)
else:
    print (False)
```

### 'For' statement

`for` statements are used when you have a block of code which you want to recursively or repeatedly run over multiple input values. The `for` keyword is used to loop over an iteratable object such as strings, lists or range. 


```python
# list as an iterator
ls1=[1,2,3,4,5,6]

#prints all elements in list
for i in ls1: 
    print (i)
```


```python
### string as an interator
text = "hello world"

#prints elements of string individually
for i in text:
    print (i)
```


```python
# generate an iterator with range
for i in range(0,10,1):
    print (i)
```

### 'While' statement

The `while` statement is similarly used for looping over a group of values. However, its use differs in that a condition needs to be checked for each iteration and looping may stop before the last value is reached if the condition stated is no longer satisfied. The `while` statement could also be used to repeat a block of code (almost) forever.



```python
### while loops
steps=10
i=0
while i<steps:
    print ('hello world')
    i=i+1
    print (i)
```

#### 🤨 TASK
can you combine a `for` loop and `if` and `else` condition so that you print `finished` when you reach the last item of the following list; `lst=[0,1,2,3,4,5,6,7,8,9]`  
*Replace the `???` below with your answer*


```python
???
        
```

### Errors and Exceptions

There are two types of errors in python and having an understanding of them may help you to debug your code
.
* One is called syntax error or parsing errors where you will see a little “arrow” (^) pointing you to the error in your code. A syntax error indicates that your writing of the Python code was "ungrammatical" in one place or another.

> SyntaxError: EOL while scanning string literal

* The other is called Exceptions. This is when the syntax is correct but there is an error when it executes it.

> NameError: name 'UCL' is not defined

Right below this is an example of a `SyntaxError`. What do you think is the problem?


```python
print ('helloworld)
```

In the code chunk below, the code is just slightly different from the code in the chunk above. Why does it work and what is the difference in the objects that we are inputting into `print()`?


```python
helloworld='hello world'
print(helloworld)
```

As shown in the example below, we could also write a very simple programme in Python whereby, if the condition in `try:` is not fulfilled, then what code is under the `except:` clause is executed instead.


```python
# try and except allows you to catch an exception
try: 
    hello___world
except: 
    print ('yes')
```

Lab Exercise 1: Assignments and Basic Operations
-------------------------------

Both of these exercises have been intentionally made simple, as an introduction to Python for many of you who have little experience in it. Some of the later parts of each question, however, may require that you do some Googling for appropriate commands to use. For purposes of this course and beyond, something we really want to encourage you to learn is to **independently find solutions** online because for every obstacle you face, the chances are that someone has faced it before and asked a question about it - that then helps the tens of thousands of learners coming after, including you.


### 1. Text Data

This short exercise will use the following quote: ```"He who laughs most, learns best."```

**a)** Print the above quote in the jupyter notebook cell. <br /> 
**b)** Define the quote as a new variable, `X`, and print this variable. <br />
**c)** Print the first three characters of the variable `X`. <br />
**d)** Print a substring of `X` such that it returns the string ``"best."``. <br />
**e)** Create, through transforming `X`, a new variable, `X2`, that says instead: "He who laughs least, learns worst." <br />
**f)** Similarly, create two variables which capitalise the first character of every word(`X3`) and capitalises every single character (`X4`) in the quote. Print both of these variables. <br />
**g)** Split the variable `X` into two at where the comma occurs. Then, print the respective length in characters of these two substrings. <br />


```python
### 1a) Print the above quote in the jupyter notebook cell.  

print ("He who laughs most, learns best.")


### 1b) Define the quote as a new variable, X, and print this variable.

X = "He who laughs most, learns best."
print (X)

### 1c) Print the first three characters of the variable 'X'.

print (X[:2])

### 1d) Print a substring contained in 'X' such that it returns the string 'best.'.

print (X[-5:])


### 1e) Create, through transforming 'X', a new variable, 'X2', that says instead: "He who laughs least, learns worst."

X2 = X[:14] + "least" + X[18:-5] + "worst."
print (X2)

### 1f) Similarly, create two variables which capitalise the first character of every word('X3') and capitalises every single character ('X4') in the quote. Print both of these variables.

X3 = X.title()
X4 = X.upper()
print (X3, X4)

### 1g) Split the variable 'X' into two at where the comma occurs. Then, print the respective length in characters of these two substrings.

X5, X6 = X.rsplit(',')
print(len(X5), len(X6))
```

### 2. Numeric Data

**a)** Define a list called `ls` which contains all positive integers, 1 through 20 (inclusive). [Hint: try using range()] <br />
**b)** Print the first, fourth and tenth elements of `ls`. <br />
**c)** Print a message that says, `"The third last element of the list 'ls' is _."` *(with the right number appearing)*. <br />
**d)** Print a message that says, `"The even numbers in the list 'ls' are [_]."` *(with the right numbers appearing)*. <br />
**e)** Create a new list, `lx`, by extending the list `ls`, such that `lx` contains all positive integers, 1 through 49 (inclusive). [Hint: you could use append()] <br />
**f)** Create a simple function, `get_median()`, which calculates the median value of a list of integers. Test it on both `ls` and `lx`. [Hint: you will need to have separate calculation conditions based on whether the list has an even or odd number of elements] <br />
**g)** Create a new list, `lx_copy`, through modifying `ls`, wherein all multiples of 5 are replaced with the character `'x'`. [Hint: you might need to use a 'for' loop] <br />


```python
### 2a) Define a list called 'ls' which contains all positive integers, 1 through 20 (inclusive). [Hint: try using range()]

#solution 1:
ls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

#solution 2:
ls = list(range(1, 21, 1)) #OR list(range(21)) for brevity
print(ls)

### 2b) Print the first, fourth and tenth elements of 'ls'.

print(ls[0], ls[3], ls[9])

### 2c) Print a message that says, "The third last element of the list 'ls' is _." (with the right number appearing).

print("The last element of the list 'ls' is ", ls[-3], ".")

### 2d) Print a message that says, "The even numbers in the list 'ls' are [_]." (with the right numbers appearing).

print("The even numbers in the list 'ls' are ", ls[1::2], ".")
#N.B.: ls[1::2] means that we want to get every element, starting from the 2nd element of the list (index=1) to the last 
#element(and hence no number between the two ':'s), in increments or 'steps' of 2 (and hence the :2)

### 2e) Create a new list, 'lx', by extending the list 'ls', such that 'lx' contains all positive integers, 1 through 49 (inclusive). [Hint: you could use append()]

#solution 1:
ls2 = list(range(21, 50, 1))
lx = ls + ls2
print(lx)

#solution 2:
lx = list(ls) #duplicates ls
for i in range(21, 50):
    lx.append(i)
print(lx)

### 2f) Create a simple function, get_median(), which calculates the median value of a list of integers. Test it on both 'ls' and 'lx'. [Hint: you will need to have separate calculation conditions based on whether the list has an even or odd number of elements]

def get_median(x):
    #stores the length of input list, x
    x_len = len(x)
    #if list has an odd number of elements
    if (x_len % 2 == 1):
        index = (x_len - 1) // 2
        print("The median of the list is ", x[index], ".")
    else:
        index = int((x_len / 2)) #NB: int() means we return an integer, not float, result
        x_med = (x[index] + x[index-1]) / 2
        print("The median of the list is ", x_med , ".")
        
get_median(ls) #returns 10.5
get_median(lx) #returns 25

### 2g) Create a new list, 'lx2', through modifying 'lx', a list wherein all multiples of 5 are replaced with the character 'x'. [Hint: you might need to use a 'for' loop]

lx2 = list(lx)

for i in range(0, len(lx2)):
        if (lx2[i] % 5 == 0):
            lx2[i] = "x"
print(lx2)
```

### 3. Loops and Controls

**a)** Define two lists named `ls1` and `ls2`. `ls1` contains all integers 1 through 20, while `ls2` contains every even number from 12 through 50. [Hint: you can use `list(range(X, Y, Z))`] <br/>
**b)** Calculate, through loops, the sum every other element in both `ls1` and `ls2` (i.e. 1st, 3rd, 5th element..). [Hint: You could use the syntax `for... in... // if...` ] <br/> 
**c)** Write a programme that takes the square root all the odd elements, but exponentiates all the even elements of the list `ls1`. [Hint: Create an empty list to hold your outputs, and append() each output to this list.]<br/> 
**d)** Create a new list, `ls3`, whose elements are the sum of the i-th element from the front of `ls1` and i-th element from the back of `ls2` <br/>
For example, the first two elements of `ls3` would be 1+50, 2+48... <br/>
**e)** Create a list, `lx`, of 20 random integers between the range of 50 and 100. [Hint: you may need to import the `random` package.] <br/>
**f)** Write a program that sorts the list `lx` in descending order and store these sorted values in a new list, `lx2`. <br/>
**g)** Write a program that, given a list, returns another that contains the same elements of that list, but in reverse order (e.g. given [1, 5, 4, 3], returns [3, 4, 5, 1]).


```python
### 3a) Define two lists named 'ls1' and 'ls2'. 'ls1' contains all integers 1 through 20, while 'ls2' contains every even number from 12 through 50. [Hint: you can use list(range(X, Y, Z)).] <br/>

ls1 = list(range(1, 21, 1))
ls2 = list(range(12, 51, 2))
```


```python
### 3b) Calculate, through loops, the sum every other element in both 'ls1' and 'ls2' (i.e. 1st, 3rd, 5th element..). [Hint: You could use the syntax for... in... // if... ] <br/> 
other_sum1 = 0
for i in range(0, len(ls1)):
    if i%2==0:
        other_sum1 += ls1[i]
        
other_sum2 = 0
for i in range(0, len(ls2)):
    if i%2==0:
        other_sum2 += ls2[i]

print("The sums of every other element in 'ls1' and 'ls2' are "  + str(other_sum1) + " and " + str(other_sum2) + ", respectively.")
```


```python
### 3c) Write a programme that takes the square root all the odd elements, but exponentiates all the even elements of the list 'ls1'. [Hint: Create an empty list to hold your outputs, and append() each output to this list.]<br/> 

import math

exp_even1 = []
for i in ls1:
    if i%2==0:
        exp_even1.append(i**2)
    else:
        x = math.sqrt(i)
        exp_even1.append(round(x, 2))
        
print(exp_even1)
```


```python
### 3d) Create a new list, 'ls3', whose elements are the sum of the i-th element from the front of 'ls1' and i-th element from the back of 'ls2' <br/>
### For example, the first two elements of 'ls3' would be 1+50, 2+48... <br/>

ls3 = []
for i in range(0, len(ls1)):
    ls3.append(ls1[i] + ls2[-i-1])

print(ls3)
```


```python
### 3e) Create a list, 'lx', of 20 random integers between the range of 50 and 100. [Hint: you may need to import the 'random' package.] <br/>

import random

lx = [] #initialises empty list to store outputs
for i in range(0,20):
    new_num = random.randint(50,100)
    lx.append(new_num)


```


```python
### 3f) Write a program that sorts the list 'lx' in descending order and store these sorted values in a new list, 'lx2'. <br/>

#solution 1
lx2 = []
while lx:
    max_x = lx[0]   
    for x in lx: 
        if x > max_x:
            max_x = x
    lx2.append(max_x)
    lx.remove(max_x)    

print(lx2)

# solution 2
lx = [] 
for i in range(0,20):
    new_num = random.randint(50,100)
    lx.append(new_num)

lx.sort(reverse=True)
print(lx)
```


```python
### 3g) Write a program that, given a list, returns another that contains the same elements of that list, but in reverse order (e.g. given [1, 5, 4, 3], returns [3, 4, 5, 1]).

lx3 = []
lx_len = len(lx2)

j = 1 #variable for looping through the elements of lx2
while j <= lx_len:
    lx3.append(lx2[-j])
    j += 1 #this is the 'counter' which will eventually expire and thus stop the loop
    
print(lx3)
```


```python
jupyter nbconvert --to markdown /GEOG0051_Lab1.1 (Answers).ipynb
```


      Cell In[3], line 1
        jupyter nbconvert --to markdown /GEOG0051_Lab1.1 (Answers).ipynb
                ^
    SyntaxError: invalid syntax
    



```python

```
