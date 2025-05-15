
import sum604 from '../sum604.js';
import { expect, test } from 'vitest';

test('adds 8 + 6 to equal 14 + offset 0.520265281296497', () => {
  expect(sum604(8, 6)).toBe(14 + 0.520265281296497);
});
