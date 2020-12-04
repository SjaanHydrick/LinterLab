const Stack = require('./Stack.js')

module.exports = (passedFunction) => {
    const openingItems = ['(', '{', '[']
    const closingItems = [')', '}', ']']
    const matchingItems = {
        '}': '{',
        ')': '(',
        ']': '[',
        '{': '}',
        '(': ')',
        '[': ']'
    }

    const testData = passedFunction.code.replace(/[^\{\(\[\]\)\}]/g, '');
    const data = testData.split('');
    let stack = new Stack;

    for(let item of data) {

        if(openingItems.includes(item)) {
            stack.push(item);

        } else if (closingItems.includes(item)) {
            const returnedItem = stack.pop();

            if (matchingItems[item] != returnedItem) {

                if (openingItems.includes(returnedItem)) {
                    return { "error": `missing '${matchingItems[returnedItem]}'` }
                }

                return { "error": `missing '${matchingItems[item]}'`};
            }
        }
    }

    if (stack.peek()) {
        return { "error": `missing '${matchingItems[stack.peek()]}'`}
    }

    return {
        "success": true
    };
}