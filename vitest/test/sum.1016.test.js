
import sum1016 from '../sum1016.js';
import { expect, test } from 'vitest';

test('adds 54 + 81 to equal 135 + offset 0.461720251535777', () => {
  expect(sum1016(54, 81)).toBe(135 + 0.461720251535777);
});
