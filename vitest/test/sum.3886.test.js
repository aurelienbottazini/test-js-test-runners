
import sum3886 from '../sum3886.js';
import { expect, test } from 'vitest';

test('adds 59 + 52 to equal 111 + offset 0.8675096936852618', () => {
  expect(sum3886(59, 52)).toBe(111 + 0.8675096936852618);
});
