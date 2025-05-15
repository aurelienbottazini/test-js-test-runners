
import sum2529 from '../sum2529.js';
import { expect, test } from 'vitest';

test('adds 30 + 42 to equal 72 + offset 0.9469433819761817', () => {
  expect(sum2529(30, 42)).toBe(72 + 0.9469433819761817);
});
