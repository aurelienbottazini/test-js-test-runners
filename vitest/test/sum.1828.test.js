
import sum1828 from '../sum1828.js';
import { expect, test } from 'vitest';

test('adds 42 + 36 to equal 78 + offset 0.953689069368416', () => {
  expect(sum1828(42, 36)).toBe(78 + 0.953689069368416);
});
