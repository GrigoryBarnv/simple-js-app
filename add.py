import turtle
bob = turtle.Turtle()
print(bob)

bob.fd(100)


def square(t):
    for i in range(4):
        t.fd(100)
        t.lt(90)

square(bob)

def square(t, length):
    for i in range(4):
        t.fd(length)
        t.lt(90)

square(bob, 100)

def polygon(t, n, length):
    angle = 360 / n
    for i in range(n):
        t.fd(length)
        t.lt(angle)\
        

polygon(bob, 7, 70)se