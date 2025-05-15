
import sum2969 from '../sum2969.js';
import { expect, test } from 'vitest';

test('adds 65 + 40 to equal 105 + offset 0.43558236208717915', () => {
  expect(sum2969(65, 40)).toBe(105 + 0.43558236208717915);
});
