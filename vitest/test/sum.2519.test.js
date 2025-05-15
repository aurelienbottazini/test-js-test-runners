
import sum2519 from '../sum2519.js';
import { expect, test } from 'vitest';

test('adds 53 + 61 to equal 114 + offset 0.07448768975967002', () => {
  expect(sum2519(53, 61)).toBe(114 + 0.07448768975967002);
});
