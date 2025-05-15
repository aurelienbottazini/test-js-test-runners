
import sum1538 from '../sum1538.js';
import { expect, test } from 'vitest';

test('adds 90 + 41 to equal 131 + offset 0.7128391528098046', () => {
  expect(sum1538(90, 41)).toBe(131 + 0.7128391528098046);
});
