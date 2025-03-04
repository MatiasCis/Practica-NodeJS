import { characters } from "../../src/js-foundation/02-destructuring";


describe('js-foundation/02-destructuring.ts', () => {

    test('characters should contain Flash, Superman', () => {


        expect( characters ).toContain('Flash');
        expect( characters ).toContain('Superman');
    })

    test('first character should be Flash, and second Superman', () => {

        const [ flash, Superman] = characters;

        expect( flash ).toBe('Flash');
        expect( Superman ).toBe('Superman');
    })

})