
import sum1570 from '../sum1570.js';
import { expect, test } from 'vitest';

test('adds 99 + 59 to equal 158 + offset 0.5852675124695811', () => {
  expect(sum1570(99, 59)).toBe(158 + 0.5852675124695811);
});
