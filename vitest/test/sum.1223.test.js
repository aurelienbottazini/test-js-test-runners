
import sum1223 from '../sum1223.js';
import { expect, test } from 'vitest';

test('adds 89 + 35 to equal 124 + offset 0.8863516290555431', () => {
  expect(sum1223(89, 35)).toBe(124 + 0.8863516290555431);
});
