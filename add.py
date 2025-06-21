fruit = "banana"
len(fruit)
length = len(fruit)
fruit[length - 1]
fruit[-1 ]

fruit[5:3]




## add 3rd parameter where it should start loooking 
def find(word, letter, start_index):
    index = start_index
    while index < len(word):
        if word[index] == letter:
            return index
        index = start_index + 1
    return print("Letter not found")


def find(word, letter, start_index):
    index = start_index
    while index < len(word):
        if word[index] == letter:
            return index
        index += 1  # increment properly
    print("Letter not found")
    return -1  # return -1 if not found




# 3 parameter + encapsulate in function
def count(word, letter, start_index):
    count = 0
    start_index = abs(start_index)
    for letter in word:
        if letter == 'a':
            start_index = count + 1
        print(count)


word = 'Pinapple'
if word < 'banana':       
print('Your word, ' + word + ', comes before banana.')
elif word > 'banana':
print('Your word, ' + word + ', comes after banana.')
else:
print('All right, bananas.')
                    