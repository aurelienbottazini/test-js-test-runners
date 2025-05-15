
import sum2807 from '../sum2807.js';
import { expect, test } from 'vitest';

test('adds 50 + 39 to equal 89 + offset 0.47978444360458505', () => {
  expect(sum2807(50, 39)).toBe(89 + 0.47978444360458505);
});
