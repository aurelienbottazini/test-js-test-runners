
import sum3359 from '../sum3359.js';
import { expect, test } from 'vitest';

test('adds 9 + 19 to equal 28 + offset 0.7699349983527739', () => {
  expect(sum3359(9, 19)).toBe(28 + 0.7699349983527739);
});
