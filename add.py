eng2sp = dict()
eng2sp['one'] = 'uno'
eng2sp = { 'one': 'uno', 'two': 'dos' }
eng2sp['four']
len(eng2sp)
'uno' in eng2sp
vals = eng2sp.values()
'uno' in vals

def historgram(s):
    d = dict()
    for c in s:
        if c not in d:
            d[c] = 1
        else:ddd