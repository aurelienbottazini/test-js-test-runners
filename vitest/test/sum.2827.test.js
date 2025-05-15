
import sum2827 from '../sum2827.js';
import { expect, test } from 'vitest';

test('adds 92 + 77 to equal 169 + offset 0.8819867117390378', () => {
  expect(sum2827(92, 77)).toBe(169 + 0.8819867117390378);
});
