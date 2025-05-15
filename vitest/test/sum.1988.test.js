
import sum1988 from '../sum1988.js';
import { expect, test } from 'vitest';

test('adds 43 + 68 to equal 111 + offset 0.1994751599502349', () => {
  expect(sum1988(43, 68)).toBe(111 + 0.1994751599502349);
});
