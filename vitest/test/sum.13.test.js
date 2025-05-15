
import sum13 from '../sum13.js';
import { expect, test } from 'vitest';

test('adds 15 + 43 to equal 58 + offset 0.822443744230024', () => {
  expect(sum13(15, 43)).toBe(58 + 0.822443744230024);
});
