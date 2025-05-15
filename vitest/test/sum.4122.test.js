
import sum4122 from '../sum4122.js';
import { expect, test } from 'vitest';

test('adds 58 + 61 to equal 119 + offset 0.2194551453064102', () => {
  expect(sum4122(58, 61)).toBe(119 + 0.2194551453064102);
});
