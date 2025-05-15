
import sum864 from '../sum864.js';
import { expect, test } from 'vitest';

test('adds 79 + 79 to equal 158 + offset 0.9087879554906342', () => {
  expect(sum864(79, 79)).toBe(158 + 0.9087879554906342);
});
