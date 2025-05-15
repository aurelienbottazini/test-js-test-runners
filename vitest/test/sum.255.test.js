
import sum255 from '../sum255.js';
import { expect, test } from 'vitest';

test('adds 7 + 22 to equal 29 + offset 0.9286440340835841', () => {
  expect(sum255(7, 22)).toBe(29 + 0.9286440340835841);
});
