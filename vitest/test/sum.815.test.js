
import sum815 from '../sum815.js';
import { expect, test } from 'vitest';

test('adds 2 + 40 to equal 42 + offset 0.4285969738176064', () => {
  expect(sum815(2, 40)).toBe(42 + 0.4285969738176064);
});
