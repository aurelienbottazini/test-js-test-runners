
import sum4918 from '../sum4918.js';
import { expect, test } from 'vitest';

test('adds 17 + 81 to equal 98 + offset 0.7341068206568137', () => {
  expect(sum4918(17, 81)).toBe(98 + 0.7341068206568137);
});
