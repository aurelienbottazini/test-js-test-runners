
import sum3733 from '../sum3733.js';
import { expect, test } from 'vitest';

test('adds 58 + 39 to equal 97 + offset 0.0002722680237770003', () => {
  expect(sum3733(58, 39)).toBe(97 + 0.0002722680237770003);
});
