s = 'abc'
t = [0, 1, 2]
zip(s, t)

for pair in zip(s, t):
    print(pair)

def has_match(t1, t2):
    for x, y in zip(t1, t2):
        if x == y:
            return True
    return False

d = {'a':0, 'b':1, 'c':2}
t = d.items()

for x, y in t:
    print(x, y)


 t = [('a', 0), ('c', 2), ('b', 1)]
d = dict(t)
print(d)


d = dict(zip('abc', range(3)))
print(d)

a = zip('abc', range(3))
print(list(a))


a = ['d' , 'n', 'f']

sorted(a)

a.sort()
print(a)




 Exercise 12.1. Write a function called most_frequent that takes a string and prints the let
ters in decreasing order of frequency. Find text samples from several different languages and see
 how letter frequency varies between languages. Compare your results with the tables at http:
 //en.wikipedia.org/wiki/Letter_frequencies. Solution: https://thinkpython.
 com/code/most_frequent.py


def most_frequent(string_text):
    d = dict()
    for letter in string_text:
        if letter in d:
            d[letter] = d[letter] + 1
        else:
            d[letter] = 1
    return d


d = most_frequent('The quick brown fox jumps over the lazy dog')
print(sorted (d.items(), key=lambda x: x[1], reverse=True))


Write a program that reads a word list from a file (see Section 9.1) and prints all the sets of
 words that are anagrams.


#read the file 

def read_words(filename):
    with open(filename) as f:
        return f.read().split()

read_words('words.txt')


def is_anagarm(word1, word2):
    return sorted(word1) == sorted(word2)dd