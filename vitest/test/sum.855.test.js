
import sum855 from '../sum855.js';
import { expect, test } from 'vitest';

test('adds 43 + 58 to equal 101 + offset 0.20693967454940232', () => {
  expect(sum855(43, 58)).toBe(101 + 0.20693967454940232);
});
