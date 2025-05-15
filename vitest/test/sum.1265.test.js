
import sum1265 from '../sum1265.js';
import { expect, test } from 'vitest';

test('adds 65 + 28 to equal 93 + offset 0.1851410637353147', () => {
  expect(sum1265(65, 28)).toBe(93 + 0.1851410637353147);
});
