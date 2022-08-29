# Conway's Game of Life

Rules:
Conway's Game of Life is a cellular automaton that is played on a 2D square grid. Each square (or "cell") on the grid can be either alive or dead, and they evolve according to the following rules:

1. Any live cell with fewer than two live neighbours dies (referred to as underpopulation).
2. Any live cell with more than three live neighbours dies (referred to as overpopulation).
3. Any live cell with two or three live neighbours lives, unchanged, to the next generation.
4. Any dead cell with exactly three live neighbours comes to life.

The initial configuration of cells can be created by a human, but all generations thereafter are completely determined by the above rules. The goal of the game is to find patterns that evolve in interesting ways – something that people have now been doing for over 50 years.

Notes:

Considerations:

- how to represent data
- number of states for each cell
- implementation for rules
- mechanisms to start and stop and reset
- grid size control (min/max grid size)
