
import sum4672 from '../sum4672.js';
import { expect, test } from 'vitest';

test('adds 32 + 88 to equal 120 + offset 0.17897434426241665', () => {
  expect(sum4672(32, 88)).toBe(120 + 0.17897434426241665);
});
