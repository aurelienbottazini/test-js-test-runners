
import sum1267 from '../sum1267.js';
import { expect, test } from 'vitest';

test('adds 71 + 87 to equal 158 + offset 0.32700219471317316', () => {
  expect(sum1267(71, 87)).toBe(158 + 0.32700219471317316);
});
