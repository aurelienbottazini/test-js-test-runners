
import sum3401 from '../sum3401.js';
import { expect, test } from 'vitest';

test('adds 28 + 31 to equal 59 + offset 0.5952612772239256', () => {
  expect(sum3401(28, 31)).toBe(59 + 0.5952612772239256);
});
