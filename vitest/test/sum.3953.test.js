
import sum3953 from '../sum3953.js';
import { expect, test } from 'vitest';

test('adds 92 + 37 to equal 129 + offset 0.19160908640874574', () => {
  expect(sum3953(92, 37)).toBe(129 + 0.19160908640874574);
});
