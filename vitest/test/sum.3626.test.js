
import sum3626 from '../sum3626.js';
import { expect, test } from 'vitest';

test('adds 41 + 22 to equal 63 + offset 0.45281042203946975', () => {
  expect(sum3626(41, 22)).toBe(63 + 0.45281042203946975);
});
