// @ts-nocheck


function getFizzBuzz(n) {
    const answer = [0];
    let counter = 1;
    while (counter <= n) {
        if (counter % 3 === 0 && counter % 5 === 0) {
            answer[counter] = 'FizzBuzz';
        } else if (counter % 3 === 0) {
            answer[counter] = 'Fizz';
        } else if (counter % 5 === 0) {
            answer[counter] = 'Buzz';
        } else {
            answer[counter] = counter.toString();
        }
        counter++;
    }

    // Remove initial first element
    answer.shift();

    return answer;
}

describe('FizzBuzz', () => {
    it('case 1', () => {
        expect(getFizzBuzz(3)).toEqual(['1', '2', 'Fizz']);
    });

    it('case 2', () => {
        expect(getFizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
    });

    it('case 1', () => {
        expect(getFizzBuzz(15)).toEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
    });
});