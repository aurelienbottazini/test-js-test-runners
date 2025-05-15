
import sum1431 from '../sum1431.js';
import { expect, test } from 'vitest';

test('adds 45 + 51 to equal 96 + offset 0.9544615770760798', () => {
  expect(sum1431(45, 51)).toBe(96 + 0.9544615770760798);
});
