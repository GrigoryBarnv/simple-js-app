fot = open('output.txt', 'w')


line1 = "this is a new line \n"
fot.write(line1)
line2 = "this is a new line \n"
fot.write(line2)
fot.close()

x = 52 
fot.write(str(x))

camels = 42
fot.write('%d' % camels) # '%d' % camels

'In %d years I have spotted %g %s.' % (3, 0.1, 'camels')

import os
cwd = os.getcwd()
print("Current working directory: {0}".format(cwd))


os.path.abspath('words.txt')

os.path.exists('words.txt')

os.path.isdir('words.txt')

os.path.isdir('/mnt/c/Users')

os.path.isfile('words.txt')

os.listdir('.')

def walk(dirname):
    for name in os.listdir(dirname):
        path = os.path.join(dirname, name)
        if os.path.isfile(path):
            print(path)
        elif os.path.isdir(path):
            walk(path)

walk('.')