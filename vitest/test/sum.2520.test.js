
import sum2520 from '../sum2520.js';
import { expect, test } from 'vitest';

test('adds 49 + 80 to equal 129 + offset 0.732253913995848', () => {
  expect(sum2520(49, 80)).toBe(129 + 0.732253913995848);
});
