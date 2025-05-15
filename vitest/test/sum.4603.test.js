
import sum4603 from '../sum4603.js';
import { expect, test } from 'vitest';

test('adds 25 + 70 to equal 95 + offset 0.9810803003213306', () => {
  expect(sum4603(25, 70)).toBe(95 + 0.9810803003213306);
});
