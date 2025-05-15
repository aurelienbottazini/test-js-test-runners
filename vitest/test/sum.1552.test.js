
import sum1552 from '../sum1552.js';
import { expect, test } from 'vitest';

test('adds 38 + 30 to equal 68 + offset 0.35406988374384796', () => {
  expect(sum1552(38, 30)).toBe(68 + 0.35406988374384796);
});
