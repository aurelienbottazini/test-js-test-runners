
import sum505 from '../sum505.js';
import { expect, test } from 'vitest';

test('adds 87 + 15 to equal 102 + offset 0.5871078294529567', () => {
  expect(sum505(87, 15)).toBe(102 + 0.5871078294529567);
});
