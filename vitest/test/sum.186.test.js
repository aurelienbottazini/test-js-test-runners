
import sum186 from '../sum186.js';
import { expect, test } from 'vitest';

test('adds 61 + 86 to equal 147 + offset 0.6339388937021312', () => {
  expect(sum186(61, 86)).toBe(147 + 0.6339388937021312);
});
