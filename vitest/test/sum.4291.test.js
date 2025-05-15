
import sum4291 from '../sum4291.js';
import { expect, test } from 'vitest';

test('adds 44 + 66 to equal 110 + offset 0.39890774992705436', () => {
  expect(sum4291(44, 66)).toBe(110 + 0.39890774992705436);
});
