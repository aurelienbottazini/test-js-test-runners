
import sum3365 from '../sum3365.js';
import { expect, test } from 'vitest';

test('adds 19 + 3 to equal 22 + offset 0.6008030932263219', () => {
  expect(sum3365(19, 3)).toBe(22 + 0.6008030932263219);
});
