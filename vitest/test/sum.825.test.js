
import sum825 from '../sum825.js';
import { expect, test } from 'vitest';

test('adds 7 + 86 to equal 93 + offset 0.8583396777470397', () => {
  expect(sum825(7, 86)).toBe(93 + 0.8583396777470397);
});
