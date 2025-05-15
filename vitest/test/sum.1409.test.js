
import sum1409 from '../sum1409.js';
import { expect, test } from 'vitest';

test('adds 65 + 97 to equal 162 + offset 0.7828981393563115', () => {
  expect(sum1409(65, 97)).toBe(162 + 0.7828981393563115);
});
