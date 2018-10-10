
# Description

This is a web based emulator for MASM.

---

# Roadmap

### October

  * Create basic interface
    - code area
    - console (for I/O)
    - Dev Tools
      * Variable Watch
      * Expression Watch
      * Local Scope Watch
  * Create code parser
    - tokenizes input from code area
      * creates arrays for each line
      * those arrays are held in an outer array
    - ignores comments
  * Create initial parts of masm emulator
    - "create" some of the registers
    - write implementations for some of the operations
      * ex. add, sub
    - write part of mini-library
      * enables basic I/O
      * similiar to Irvine library
        - ex. readChar, writeChar, etc.

### November

  * Further implement the various aspects of the language
  * Extend the mini-library
  * Add syntax highlighting
  * Add code formatter
  * Enable file upload as the source of code

### December

  * Finish implementing the majority of the language
  * Add breakpoints / debugging tools
  * Use Electron to create a desktop version of this app
  * Re-evaluate app needs
    - possibly port the front end over to React
    - consider extra features

