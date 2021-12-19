# ExpenseReport Level 2

** WARNING! ** This repository will be rebased and force-pushed whenever there is a change to the (Level 1) ExpenseReport at https://github.com/christianhujer/expensereport

The ExpenseReport legacy code refactoring kata in various languages.

This is an example of a piece of legacy code with lots of code smells.
The goal is to support the following new feature as best as you can:
* Add Lunch with an expense limit of 2000.
* Add JSON as an output format.

## History
So you looked at the Expense Report code.
And you knew you had to refactor it.
But you didn't.
You left it as it is.

Weeks later, you revisit the code, and notice that it's gotten worse.
A colleague has added a new feature, output in HTML, without refactoring the code.
It's a real mess.
And you gotta work with it now.

## Process
1. 📚 Read the code to understand what it does and how it works.
2. 🦨 Read the code and check for design smells.
3. 🧑‍🔬 Analyze what you would have to change to implement the new requirement without refactoring the code.
4. 🧪 Write a characterization test. Take note of all design smells that you missed that made your life writing a test miserable.
5. 🔧 Refactor the code.
6. 🔧 Refactor the test.
7. 👼 Test-drive the new features.

## Supported Languages
The ExpenseReport example currently exists in the following languages, with the checkbox indicating whether it has been udpated for Level 2:
- [ ] [Ada](expensereport-ada)
- [ ] [BASIC](expensereport-abs) (Amiga BASIC, Commodore Amiga) ⇐ Quite amazing! First BASIC without line numbers!
- [ ] [BASIC](expensereport-bwb) (Bywater BASIC, Linux) (very similar to Commodore BASIC)
- [ ] [BASIC](expensereport-c64) (Commodore BASIC, Commodore 64)
- [ ] [BASIC](expensereport-cpc) (Locomotive BASIC, Amstrad CPC)
- [ ] [C](expensereport-c/)
- [ ] [C#](expensereport-csharp/)
- [ ] [C++](expensereport-cxx/)
- [ ] [Clojure](expensereport-clojure/) ⇐ This one was particularly painful to intentionally write poorly, I almost cried.
- [ ] [COBOL](expensereport-cobol/)
- [ ] [D](expensereport-d/)
- [ ] [Dart](expensereport-dart/)
- [ ] [Elixir](expensereport-elixir/)
- [ ] [F#](expensereport-fsharp/)
- [ ] [Fortran](expensereport-fortran/)
- [ ] [Go](expensereport-go/)
- [ ] [Groovy](expensereport-groovy/)
- [ ] [Haskell](expensereport-haskell/)
- [ ] [Java](expensereport-java/)
- [ ] [JavaScript](expensereport-javascript/)
- [ ] [Julia](expensereport-julia/)
- [ ] [Kotlin](expensereport-kotlin/)
- [ ] [Lisp](expensereport-lisp/) (Common Lisp)
- [ ] [Lua](expensereport-lua/)
- [ ] [Nim](expense-report-nim/)
- [ ] [Objective-C](expensereport-objc/)
- [ ] [Pascal](expensereport-pascal/)
- [ ] [Perl](expensereport-perl/)
- [ ] [PHP](expensereport-php/)
- [ ] [Prolog](expensereport-prolog/)
- [ ] [Python](expensereport-python/)
- [ ] [Raku](expensereport-raku/) (Perl6)
- [ ] [Rexx](expensereport-rexx/) (tested with Regina Rexx and ARexx)
- [ ] [Ruby](expensereport-ruby/)
- [ ] [Rust](expensereport-rust/)
- [ ] [Scala](expensereport-scala/)
- [ ] [Scheme](expensereport-scheme/)
- [ ] [SQL](expensereport-sql/) (Using SQLite3)
- [ ] [Swift](expensereport-swift/)
- [ ] [Smalltalk](expensereport-smalltalk/)
- [ ] [TcL](expensereport-tcl/)
- [ ] [TypeScript](expensereport-typescript/)
- [ ] [Visual BASIC](expensereport-vb/)
- [ ] [XML/XSLT](expensereport-xslt/)

## Planned languages
(in no particular order and with no guarantee)

- Eiffel
- Elm
- Erlang
- Logo
- Modula-2 (once the linker starts working again)
- Oberon
- R

## Languages explicitly not planned
- Brainfuck
- Malbolge
- Whitespace

## Solutions
To see solutions, switch to the branch solutions.

**Warning** The solutions branch will be rebased!

## Credits
I first encountered the ExpenseReport example during a bootcamp at Equal Experts.
I also have seen the ExpenseReport example being used by Robert "Uncle Bob" C. Martin.
I have tried to research its origins but so far I have failed.
If you know who has first come up with this example, please get in touch with me.
