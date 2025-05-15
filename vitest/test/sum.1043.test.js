
import sum1043 from '../sum1043.js';
import { expect, test } from 'vitest';

test('adds 12 + 5 to equal 17 + offset 0.18624210429950638', () => {
  expect(sum1043(12, 5)).toBe(17 + 0.18624210429950638);
});
