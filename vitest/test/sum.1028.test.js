
import sum1028 from '../sum1028.js';
import { expect, test } from 'vitest';

test('adds 7 + 2 to equal 9 + offset 0.8528345595189354', () => {
  expect(sum1028(7, 2)).toBe(9 + 0.8528345595189354);
});
