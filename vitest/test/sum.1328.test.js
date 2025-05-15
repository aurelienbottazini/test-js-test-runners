
import sum1328 from '../sum1328.js';
import { expect, test } from 'vitest';

test('adds 23 + 40 to equal 63 + offset 0.8867950070381432', () => {
  expect(sum1328(23, 40)).toBe(63 + 0.8867950070381432);
});
