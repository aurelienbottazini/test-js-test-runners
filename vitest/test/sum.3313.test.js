
import sum3313 from '../sum3313.js';
import { expect, test } from 'vitest';

test('adds 87 + 69 to equal 156 + offset 0.13546100960627128', () => {
  expect(sum3313(87, 69)).toBe(156 + 0.13546100960627128);
});
