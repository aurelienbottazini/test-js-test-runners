
import sum2457 from '../sum2457.js';
import { expect, test } from 'vitest';

test('adds 19 + 8 to equal 27 + offset 0.4542111544493236', () => {
  expect(sum2457(19, 8)).toBe(27 + 0.4542111544493236);
});
