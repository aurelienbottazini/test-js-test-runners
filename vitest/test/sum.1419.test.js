
import sum1419 from '../sum1419.js';
import { expect, test } from 'vitest';

test('adds 65 + 15 to equal 80 + offset 0.76951078124099', () => {
  expect(sum1419(65, 15)).toBe(80 + 0.76951078124099);
});
