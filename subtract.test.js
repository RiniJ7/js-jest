const subtract = require('./subtract')
// 1+2 == 3

test('correctly subtract two numbers', () => {
    expect(
        subtract(1, 2)
        ).toBe(-1)
})