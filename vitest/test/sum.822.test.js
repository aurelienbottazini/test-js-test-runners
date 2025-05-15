
import sum822 from '../sum822.js';
import { expect, test } from 'vitest';

test('adds 9 + 43 to equal 52 + offset 0.3258115223630944', () => {
  expect(sum822(9, 43)).toBe(52 + 0.3258115223630944);
});
