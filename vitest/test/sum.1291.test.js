
import sum1291 from '../sum1291.js';
import { expect, test } from 'vitest';

test('adds 40 + 66 to equal 106 + offset 0.9366003482535986', () => {
  expect(sum1291(40, 66)).toBe(106 + 0.9366003482535986);
});
