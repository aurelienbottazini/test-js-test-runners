
import sum3765 from '../sum3765.js';
import { expect, test } from 'vitest';

test('adds 46 + 90 to equal 136 + offset 0.36219534920938856', () => {
  expect(sum3765(46, 90)).toBe(136 + 0.36219534920938856);
});
