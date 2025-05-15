
import sum2389 from '../sum2389.js';
import { expect, test } from 'vitest';

test('adds 67 + 79 to equal 146 + offset 0.128293306267399', () => {
  expect(sum2389(67, 79)).toBe(146 + 0.128293306267399);
});
