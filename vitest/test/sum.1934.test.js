
import sum1934 from '../sum1934.js';
import { expect, test } from 'vitest';

test('adds 94 + 10 to equal 104 + offset 0.44019897007030584', () => {
  expect(sum1934(94, 10)).toBe(104 + 0.44019897007030584);
});
