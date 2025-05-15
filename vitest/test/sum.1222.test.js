
import sum1222 from '../sum1222.js';
import { expect, test } from 'vitest';

test('adds 16 + 51 to equal 67 + offset 0.9594092788897626', () => {
  expect(sum1222(16, 51)).toBe(67 + 0.9594092788897626);
});
