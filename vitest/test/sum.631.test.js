
import sum631 from '../sum631.js';
import { expect, test } from 'vitest';

test('adds 38 + 81 to equal 119 + offset 0.9305652810433496', () => {
  expect(sum631(38, 81)).toBe(119 + 0.9305652810433496);
});
