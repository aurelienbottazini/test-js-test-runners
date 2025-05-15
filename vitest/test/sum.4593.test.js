
import sum4593 from '../sum4593.js';
import { expect, test } from 'vitest';

test('adds 88 + 4 to equal 92 + offset 0.7639949518557465', () => {
  expect(sum4593(88, 4)).toBe(92 + 0.7639949518557465);
});
