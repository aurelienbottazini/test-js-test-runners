
import sum3611 from '../sum3611.js';
import { expect, test } from 'vitest';

test('adds 64 + 8 to equal 72 + offset 0.9655175542173283', () => {
  expect(sum3611(64, 8)).toBe(72 + 0.9655175542173283);
});
