
import sum1958 from '../sum1958.js';
import { expect, test } from 'vitest';

test('adds 83 + 39 to equal 122 + offset 0.04602417119638125', () => {
  expect(sum1958(83, 39)).toBe(122 + 0.04602417119638125);
});
