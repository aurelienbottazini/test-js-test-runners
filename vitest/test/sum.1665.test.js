
import sum1665 from '../sum1665.js';
import { expect, test } from 'vitest';

test('adds 70 + 11 to equal 81 + offset 0.8942326648066518', () => {
  expect(sum1665(70, 11)).toBe(81 + 0.8942326648066518);
});
