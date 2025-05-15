
import sum764 from '../sum764.js';
import { expect, test } from 'vitest';

test('adds 50 + 71 to equal 121 + offset 0.6804592128824749', () => {
  expect(sum764(50, 71)).toBe(121 + 0.6804592128824749);
});
