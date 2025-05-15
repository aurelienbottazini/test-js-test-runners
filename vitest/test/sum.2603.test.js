
import sum2603 from '../sum2603.js';
import { expect, test } from 'vitest';

test('adds 26 + 11 to equal 37 + offset 0.7788278603028579', () => {
  expect(sum2603(26, 11)).toBe(37 + 0.7788278603028579);
});
