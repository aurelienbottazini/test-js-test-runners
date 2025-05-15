
import sum1743 from '../sum1743.js';
import { expect, test } from 'vitest';

test('adds 92 + 84 to equal 176 + offset 0.5516725445847064', () => {
  expect(sum1743(92, 84)).toBe(176 + 0.5516725445847064);
});
