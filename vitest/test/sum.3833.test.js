
import sum3833 from '../sum3833.js';
import { expect, test } from 'vitest';

test('adds 34 + 93 to equal 127 + offset 0.8579043687439384', () => {
  expect(sum3833(34, 93)).toBe(127 + 0.8579043687439384);
});
