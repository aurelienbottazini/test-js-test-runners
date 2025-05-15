
import sum3704 from '../sum3704.js';
import { expect, test } from 'vitest';

test('adds 49 + 89 to equal 138 + offset 0.837070739727154', () => {
  expect(sum3704(49, 89)).toBe(138 + 0.837070739727154);
});
