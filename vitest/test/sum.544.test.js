
import sum544 from '../sum544.js';
import { expect, test } from 'vitest';

test('adds 18 + 13 to equal 31 + offset 0.23223854997602789', () => {
  expect(sum544(18, 13)).toBe(31 + 0.23223854997602789);
});
