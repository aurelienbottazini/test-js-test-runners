
import sum3448 from '../sum3448.js';
import { expect, test } from 'vitest';

test('adds 78 + 18 to equal 96 + offset 0.010635016409074605', () => {
  expect(sum3448(78, 18)).toBe(96 + 0.010635016409074605);
});
