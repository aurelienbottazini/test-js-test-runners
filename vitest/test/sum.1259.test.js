
import sum1259 from '../sum1259.js';
import { expect, test } from 'vitest';

test('adds 75 + 60 to equal 135 + offset 0.33101297135039476', () => {
  expect(sum1259(75, 60)).toBe(135 + 0.33101297135039476);
});
