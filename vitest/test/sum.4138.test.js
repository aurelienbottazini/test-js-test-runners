
import sum4138 from '../sum4138.js';
import { expect, test } from 'vitest';

test('adds 40 + 14 to equal 54 + offset 0.40276469560421657', () => {
  expect(sum4138(40, 14)).toBe(54 + 0.40276469560421657);
});
