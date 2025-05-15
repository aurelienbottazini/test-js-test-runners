
import sum4070 from '../sum4070.js';
import { expect, test } from 'vitest';

test('adds 78 + 52 to equal 130 + offset 0.6988468105639923', () => {
  expect(sum4070(78, 52)).toBe(130 + 0.6988468105639923);
});
