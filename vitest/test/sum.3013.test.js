
import sum3013 from '../sum3013.js';
import { expect, test } from 'vitest';

test('adds 28 + 65 to equal 93 + offset 0.7555619628260744', () => {
  expect(sum3013(28, 65)).toBe(93 + 0.7555619628260744);
});
