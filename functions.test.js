import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./functions";

test('Capitalize', () => {
    expect(capitalize('david')).toBe('DAVID');
    expect(capitalize('DaViD')).toBe('DAVID');
});

test('Reverse String', () =>{
    expect(reverseString('hola')).toBe('aloh');
});

test('Calculator', () =>{
    expect(calculator.add(2,2)).toBe(4);
    expect(calculator.subtract(2,2)).toBe(0);
    expect(calculator.divide(2,2)).toBe(1);
    expect(calculator.multiply(2,2)).toBe(4);
});

test('caesarCipher', () => {
    expect(caesarCipher('defend the east wall of the castle', 1))
        .toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
    expect(caesarCipher('DefenD the east wall of the castle', 1))
        .toBe('EfgfoE uif fbtu xbmm pg uif dbtumf');
    expect(caesarCipher('DefenD the east wall of the castle.', 1))
        .toBe('EfgfoE uif fbtu xbmm pg uif dbtumf.');
});

test('Analyze Array', () =>{
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});