
import sum4602 from '../sum4602.js';
import { expect, test } from 'vitest';

test('adds 97 + 55 to equal 152 + offset 0.6953376260946287', () => {
  expect(sum4602(97, 55)).toBe(152 + 0.6953376260946287);
});
