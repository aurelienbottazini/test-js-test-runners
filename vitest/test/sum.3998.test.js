
import sum3998 from '../sum3998.js';
import { expect, test } from 'vitest';

test('adds 48 + 67 to equal 115 + offset 0.5743671966670232', () => {
  expect(sum3998(48, 67)).toBe(115 + 0.5743671966670232);
});
