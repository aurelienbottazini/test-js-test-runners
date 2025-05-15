
import sum193 from '../sum193.js';
import { expect, test } from 'vitest';

test('adds 20 + 38 to equal 58 + offset 0.7889456294248688', () => {
  expect(sum193(20, 38)).toBe(58 + 0.7889456294248688);
});
