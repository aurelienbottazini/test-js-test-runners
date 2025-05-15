
import sum4863 from '../sum4863.js';
import { expect, test } from 'vitest';

test('adds 83 + 47 to equal 130 + offset 0.5717491199689771', () => {
  expect(sum4863(83, 47)).toBe(130 + 0.5717491199689771);
});
