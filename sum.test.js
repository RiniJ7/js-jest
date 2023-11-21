const sum = require('./sum')
// 1+2 == 3

test('correctly add two numbers', () => {
    expect(
        sum(1, 2)
        ).toBe(3)
})