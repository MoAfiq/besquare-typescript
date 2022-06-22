enum Direction {
    NORTH = 'North',
    EAST = 'East',
    SOUTH = 'South',
    WEST = 'West'
}

function move(direction: Direction) {
    console.log(`Moving towards ${direction}`)
}

// OK
move(Direction.EAST);
// Error
move(Direction.SomeDirection);