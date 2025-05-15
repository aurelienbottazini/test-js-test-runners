
import sum4500 from '../sum4500.js';
import { expect, test } from 'vitest';

test('adds 63 + 52 to equal 115 + offset 0.43901447405332183', () => {
  expect(sum4500(63, 52)).toBe(115 + 0.43901447405332183);
});
