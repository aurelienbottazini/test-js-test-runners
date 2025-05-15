
import sum178 from '../sum178.js';
import { expect, test } from 'vitest';

test('adds 80 + 5 to equal 85 + offset 0.15182589243642208', () => {
  expect(sum178(80, 5)).toBe(85 + 0.15182589243642208);
});
