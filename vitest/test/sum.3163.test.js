
import sum3163 from '../sum3163.js';
import { expect, test } from 'vitest';

test('adds 11 + 67 to equal 78 + offset 0.26445281035547297', () => {
  expect(sum3163(11, 67)).toBe(78 + 0.26445281035547297);
});
