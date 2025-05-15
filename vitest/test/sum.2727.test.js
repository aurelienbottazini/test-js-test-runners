
import sum2727 from '../sum2727.js';
import { expect, test } from 'vitest';

test('adds 23 + 52 to equal 75 + offset 0.042900884445014276', () => {
  expect(sum2727(23, 52)).toBe(75 + 0.042900884445014276);
});
