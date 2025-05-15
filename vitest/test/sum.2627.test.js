
import sum2627 from '../sum2627.js';
import { expect, test } from 'vitest';

test('adds 77 + 77 to equal 154 + offset 0.6680160357980349', () => {
  expect(sum2627(77, 77)).toBe(154 + 0.6680160357980349);
});
