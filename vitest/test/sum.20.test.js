
import sum20 from '../sum20.js';
import { expect, test } from 'vitest';

test('adds 44 + 94 to equal 138 + offset 0.19880863370261947', () => {
  expect(sum20(44, 94)).toBe(138 + 0.19880863370261947);
});
