
import sum4631 from '../sum4631.js';
import { expect, test } from 'vitest';

test('adds 51 + 18 to equal 69 + offset 0.9915892288694566', () => {
  expect(sum4631(51, 18)).toBe(69 + 0.9915892288694566);
});
