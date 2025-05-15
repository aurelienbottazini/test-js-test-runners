
import sum2275 from '../sum2275.js';
import { expect, test } from 'vitest';

test('adds 60 + 55 to equal 115 + offset 0.3158778282940431', () => {
  expect(sum2275(60, 55)).toBe(115 + 0.3158778282940431);
});
