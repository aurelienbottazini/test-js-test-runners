
import sum510 from '../sum510.js';
import { expect, test } from 'vitest';

test('adds 82 + 80 to equal 162 + offset 0.7702668721769602', () => {
  expect(sum510(82, 80)).toBe(162 + 0.7702668721769602);
});
