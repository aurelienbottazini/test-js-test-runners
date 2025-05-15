
import sum3231 from '../sum3231.js';
import { expect, test } from 'vitest';

test('adds 4 + 67 to equal 71 + offset 0.2606874578946625', () => {
  expect(sum3231(4, 67)).toBe(71 + 0.2606874578946625);
});
