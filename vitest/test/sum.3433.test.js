
import sum3433 from '../sum3433.js';
import { expect, test } from 'vitest';

test('adds 15 + 16 to equal 31 + offset 0.379865215812213', () => {
  expect(sum3433(15, 16)).toBe(31 + 0.379865215812213);
});
