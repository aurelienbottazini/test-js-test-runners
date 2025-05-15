
import sum1926 from '../sum1926.js';
import { expect, test } from 'vitest';

test('adds 78 + 46 to equal 124 + offset 0.9795018759982775', () => {
  expect(sum1926(78, 46)).toBe(124 + 0.9795018759982775);
});
