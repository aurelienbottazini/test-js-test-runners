
import sum1097 from '../sum1097.js';
import { expect, test } from 'vitest';

test('adds 59 + 77 to equal 136 + offset 0.3263803735438302', () => {
  expect(sum1097(59, 77)).toBe(136 + 0.3263803735438302);
});
