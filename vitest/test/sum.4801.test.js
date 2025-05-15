
import sum4801 from '../sum4801.js';
import { expect, test } from 'vitest';

test('adds 54 + 96 to equal 150 + offset 0.23940125187162786', () => {
  expect(sum4801(54, 96)).toBe(150 + 0.23940125187162786);
});
