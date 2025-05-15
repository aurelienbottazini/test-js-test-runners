
import sum1513 from '../sum1513.js';
import { expect, test } from 'vitest';

test('adds 82 + 22 to equal 104 + offset 0.31236620478574606', () => {
  expect(sum1513(82, 22)).toBe(104 + 0.31236620478574606);
});
