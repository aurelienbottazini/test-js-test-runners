
import sum3273 from '../sum3273.js';
import { expect, test } from 'vitest';

test('adds 43 + 77 to equal 120 + offset 0.5359935913162183', () => {
  expect(sum3273(43, 77)).toBe(120 + 0.5359935913162183);
});
