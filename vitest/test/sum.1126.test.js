
import sum1126 from '../sum1126.js';
import { expect, test } from 'vitest';

test('adds 51 + 20 to equal 71 + offset 0.002950395605208933', () => {
  expect(sum1126(51, 20)).toBe(71 + 0.002950395605208933);
});
