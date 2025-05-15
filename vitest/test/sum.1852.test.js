
import sum1852 from '../sum1852.js';
import { expect, test } from 'vitest';

test('adds 36 + 1 to equal 37 + offset 0.834739271916018', () => {
  expect(sum1852(36, 1)).toBe(37 + 0.834739271916018);
});
