
import sum4278 from '../sum4278.js';
import { expect, test } from 'vitest';

test('adds 56 + 61 to equal 117 + offset 0.7319045861477542', () => {
  expect(sum4278(56, 61)).toBe(117 + 0.7319045861477542);
});
