def binomial_coeff(n, k, depth=0):
    indent = "  " * depth  # indent to visualize recursion level
    print(f"{indent}binomial_coeff({n}, {k}) called")

    if k == 0:
        print(f"{indent}→ k is 0 → return 1")
        return 1
    elif n == 0:
        print(f"{indent}→ n is 0 → return 0")
        return 0
    else:
        print(f"{indent}→ computing binomial_coeff({n-1}, {k}) + binomial_coeff({n-1}, {k-1})")
        result1 = binomial_coeff(n-1, k, depth+1)
        result2 = binomial_coeff(n-1, k-1, depth+1)
        result = result1 + result2
        print(f"{indent}→ result: {result1} + {result2} = {result}")
        return result


n = 5
k = 2
result = binomial_coeff(n, k)
print(f"binomial_coeff({n}, {k}) = {result}")