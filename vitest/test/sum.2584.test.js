
import sum2584 from '../sum2584.js';
import { expect, test } from 'vitest';

test('adds 29 + 74 to equal 103 + offset 0.002383226363995128', () => {
  expect(sum2584(29, 74)).toBe(103 + 0.002383226363995128);
});
