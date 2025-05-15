
import sum376 from '../sum376.js';
import { expect, test } from 'vitest';

test('adds 65 + 58 to equal 123 + offset 0.49244967733811995', () => {
  expect(sum376(65, 58)).toBe(123 + 0.49244967733811995);
});
