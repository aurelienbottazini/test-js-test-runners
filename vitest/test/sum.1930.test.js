
import sum1930 from '../sum1930.js';
import { expect, test } from 'vitest';

test('adds 77 + 3 to equal 80 + offset 0.7270749167980438', () => {
  expect(sum1930(77, 3)).toBe(80 + 0.7270749167980438);
});
