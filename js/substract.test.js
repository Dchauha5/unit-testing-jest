

const subtract = require('./subtract')

test('properly substracts two numbers', () => {

    expect(subtract(1,2)).toBe(-1)
})