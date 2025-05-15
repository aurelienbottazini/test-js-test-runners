
import sum2784 from '../sum2784.js';
import { expect, test } from 'vitest';

test('adds 96 + 12 to equal 108 + offset 0.43497726038165496', () => {
  expect(sum2784(96, 12)).toBe(108 + 0.43497726038165496);
});
