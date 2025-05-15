
import sum3195 from '../sum3195.js';
import { expect, test } from 'vitest';

test('adds 88 + 10 to equal 98 + offset 0.34728761093288163', () => {
  expect(sum3195(88, 10)).toBe(98 + 0.34728761093288163);
});
