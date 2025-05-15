
import sum3074 from '../sum3074.js';
import { expect, test } from 'vitest';

test('adds 12 + 55 to equal 67 + offset 0.8361038545610866', () => {
  expect(sum3074(12, 55)).toBe(67 + 0.8361038545610866);
});
