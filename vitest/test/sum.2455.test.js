
import sum2455 from '../sum2455.js';
import { expect, test } from 'vitest';

test('adds 93 + 12 to equal 105 + offset 0.035231921346382644', () => {
  expect(sum2455(93, 12)).toBe(105 + 0.035231921346382644);
});
