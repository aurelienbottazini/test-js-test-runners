
import sum1824 from '../sum1824.js';
import { expect, test } from 'vitest';

test('adds 46 + 79 to equal 125 + offset 0.012253611761586014', () => {
  expect(sum1824(46, 79)).toBe(125 + 0.012253611761586014);
});
