
import sum3114 from '../sum3114.js';
import { expect, test } from 'vitest';

test('adds 62 + 63 to equal 125 + offset 0.9465018443811185', () => {
  expect(sum3114(62, 63)).toBe(125 + 0.9465018443811185);
});
