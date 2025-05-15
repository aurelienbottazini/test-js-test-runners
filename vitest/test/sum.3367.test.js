
import sum3367 from '../sum3367.js';
import { expect, test } from 'vitest';

test('adds 96 + 42 to equal 138 + offset 0.31003353871871886', () => {
  expect(sum3367(96, 42)).toBe(138 + 0.31003353871871886);
});
