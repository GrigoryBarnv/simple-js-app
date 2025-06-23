
t = 'a', 'b', 'c', 'd', 'e'
t1 = 'a',
type(t1)

t2 = 'b'
type(t2)


addr = 'monty@donty'
uname, domain = addr.split('@')
type(uname)

t = divmod(10, 3)
t


def min_max(x):
    return min(x), max(x)


min_max([1, 2, 3, 4, 5])


def printall(*args):
    print(args)


printall(1, 2, 3, 4, "dss")

t = (4, 5)
divmod(*t)


