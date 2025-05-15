
import sum4817 from '../sum4817.js';
import { expect, test } from 'vitest';

test('adds 33 + 97 to equal 130 + offset 0.6408895307107794', () => {
  expect(sum4817(33, 97)).toBe(130 + 0.6408895307107794);
});
