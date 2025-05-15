
import sum33 from '../sum33.js';
import { expect, test } from 'vitest';

test('adds 20 + 76 to equal 96 + offset 0.5480917076182605', () => {
  expect(sum33(20, 76)).toBe(96 + 0.5480917076182605);
});
