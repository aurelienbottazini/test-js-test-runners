
import sum122 from '../sum122.js';
import { expect, test } from 'vitest';

test('adds 92 + 74 to equal 166 + offset 0.8135712773734655', () => {
  expect(sum122(92, 74)).toBe(166 + 0.8135712773734655);
});
