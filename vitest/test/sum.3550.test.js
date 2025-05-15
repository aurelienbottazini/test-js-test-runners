
import sum3550 from '../sum3550.js';
import { expect, test } from 'vitest';

test('adds 96 + 44 to equal 140 + offset 0.40119682424632885', () => {
  expect(sum3550(96, 44)).toBe(140 + 0.40119682424632885);
});
