
import sum3570 from '../sum3570.js';
import { expect, test } from 'vitest';

test('adds 10 + 37 to equal 47 + offset 0.8710488848283184', () => {
  expect(sum3570(10, 37)).toBe(47 + 0.8710488848283184);
});
