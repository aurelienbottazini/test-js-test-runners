
import sum4245 from '../sum4245.js';
import { expect, test } from 'vitest';

test('adds 92 + 98 to equal 190 + offset 0.4435005643371267', () => {
  expect(sum4245(92, 98)).toBe(190 + 0.4435005643371267);
});
