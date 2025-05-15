
import sum4480 from '../sum4480.js';
import { expect, test } from 'vitest';

test('adds 83 + 7 to equal 90 + offset 0.03585574717519857', () => {
  expect(sum4480(83, 7)).toBe(90 + 0.03585574717519857);
});
