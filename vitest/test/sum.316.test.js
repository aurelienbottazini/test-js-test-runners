
import sum316 from '../sum316.js';
import { expect, test } from 'vitest';

test('adds 20 + 16 to equal 36 + offset 0.6475561539724183', () => {
  expect(sum316(20, 16)).toBe(36 + 0.6475561539724183);
});
