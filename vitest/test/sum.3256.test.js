
import sum3256 from '../sum3256.js';
import { expect, test } from 'vitest';

test('adds 64 + 59 to equal 123 + offset 0.8490227337564075', () => {
  expect(sum3256(64, 59)).toBe(123 + 0.8490227337564075);
});
