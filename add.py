import sys

def sed(pattern, replacement, source, target):
    try:
        with open(source, 'r') as src_file, \
             open(target, 'w') as tgt_file:
            for line in src_file:
                new_line = line.replace(pattern, replacement)
                tgt_file.write(new_line)

    except IOError as e:
        print(f"Error: {e}")
        sys.exit(1)

    except FileNotFoundError as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == '__main__':
    
                