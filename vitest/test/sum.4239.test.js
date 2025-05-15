
import sum4239 from '../sum4239.js';
import { expect, test } from 'vitest';

test('adds 75 + 70 to equal 145 + offset 0.8940423211589168', () => {
  expect(sum4239(75, 70)).toBe(145 + 0.8940423211589168);
});
