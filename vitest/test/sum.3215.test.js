
import sum3215 from '../sum3215.js';
import { expect, test } from 'vitest';

test('adds 8 + 89 to equal 97 + offset 0.545324978941659', () => {
  expect(sum3215(8, 89)).toBe(97 + 0.545324978941659);
});
