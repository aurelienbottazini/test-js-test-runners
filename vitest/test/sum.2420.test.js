
import sum2420 from '../sum2420.js';
import { expect, test } from 'vitest';

test('adds 48 + 96 to equal 144 + offset 0.252428388935082', () => {
  expect(sum2420(48, 96)).toBe(144 + 0.252428388935082);
});
