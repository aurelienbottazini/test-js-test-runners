
import sum3415 from '../sum3415.js';
import { expect, test } from 'vitest';

test('adds 58 + 23 to equal 81 + offset 0.1441249313823142', () => {
  expect(sum3415(58, 23)).toBe(81 + 0.1441249313823142);
});
