
import sum3511 from '../sum3511.js';
import { expect, test } from 'vitest';

test('adds 53 + 67 to equal 120 + offset 0.01181568545351852', () => {
  expect(sum3511(53, 67)).toBe(120 + 0.01181568545351852);
});
