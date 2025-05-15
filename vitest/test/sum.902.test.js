
import sum902 from '../sum902.js';
import { expect, test } from 'vitest';

test('adds 78 + 23 to equal 101 + offset 0.45551902425018986', () => {
  expect(sum902(78, 23)).toBe(101 + 0.45551902425018986);
});
