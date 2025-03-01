import re
import os
import sys

def split_file(input_file):
    # Read the input file
    with open(input_file, 'r') as f:
        lines = f.readlines()
    
    # Initialize variables
    current_content = []
    current_filename = "Header.h"  # Default filename for the first section
    output_files = []
    
    i = 0
    while i < len(lines):
        # Add the current line to the current content
        current_content.append(lines[i])
        
        # Check if we're at least 2 lines in and the current line starts with "// A versioned accessor"
        if i >= 2 and lines[i].strip().startswith("// A versioned accessor"):
            # The break point is two lines before this line
            break_line = lines[i-2].strip()
            
            # Extract the filename from the break line
            # Look for "ISteam" pattern and remove it
            match = re.search(r'ISteam(\w+)', break_line)
            if match:
                new_filename = f"{match.group(1)}.h"
                
                # Write the current content to the current filename, excluding the last 3 lines
                # (the 2 lines before the break and the current "// A versioned accessor" line)
                with open(current_filename, 'w') as f:
                    f.writelines(current_content[:-3])
                
                output_files.append(current_filename)
                print(f"Created {current_filename}")
                
                # Start a new section with the two lines before the versioned accessor
                # followed by the current line (versioned accessor line)
                current_filename = new_filename
                current_content = [lines[i-2], lines[i-1], lines[i]]
        
        i += 1
    
    # Write the remaining content to the last file
    if current_content:
        with open(current_filename, 'w') as f:
            f.writelines(current_content)
        
        output_files.append(current_filename)
        print(f"Created {current_filename}")
    
    return output_files

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py input_file")
        sys.exit(1)
    
    input_file = sys.argv[1]
    if not os.path.exists(input_file):
        print(f"Error: File {input_file} not found")
        sys.exit(1)
    
    output_files = split_file(input_file)
    print(f"Split {input_file} into {len(output_files)} files: {', '.join(output_files)}")