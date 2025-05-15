
import sum1599 from '../sum1599.js';
import { expect, test } from 'vitest';

test('adds 48 + 68 to equal 116 + offset 0.6482399039813935', () => {
  expect(sum1599(48, 68)).toBe(116 + 0.6482399039813935);
});
