import math

# Custom square root function using Newton's method
def mysqrt(a):
    x = a / 2  # initial guess
    epsilon = 1e-10  # acceptable error
    while True:
        y = (x + a / x) / 2
        if abs(y - x) < epsilon:
            break
        x = y
    return x

# Test function that compares mysqrt with math.sqrt
def test_square_root():
    print(f"{'a':<5} {'mysqrt(a)':<15} {'math.sqrt(a)':<15} {'diff':<15}")
    print("-" * 50)
    for a in range(1, 10):
        my_val = mysqrt(a)
        math_val = math.sqrt(a)
        diff = abs(my_val - math_val)
        print(f"{a:<5} {my_val:<15.12f} {math_val:<15.12f} {diff:<15.12g}")

# Run the test
test_square_root()

def eval_loop(message):
    while True:
        read = input(message)
        print = eval(read)
    if read == "done":
        return "done"
    break