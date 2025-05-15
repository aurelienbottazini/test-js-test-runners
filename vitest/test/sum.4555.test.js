
import sum4555 from '../sum4555.js';
import { expect, test } from 'vitest';

test('adds 69 + 49 to equal 118 + offset 0.9663512978407726', () => {
  expect(sum4555(69, 49)).toBe(118 + 0.9663512978407726);
});
