
import sum2454 from '../sum2454.js';
import { expect, test } from 'vitest';

test('adds 46 + 19 to equal 65 + offset 0.26006150555125473', () => {
  expect(sum2454(46, 19)).toBe(65 + 0.26006150555125473);
});
