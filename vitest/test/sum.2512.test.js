
import sum2512 from '../sum2512.js';
import { expect, test } from 'vitest';

test('adds 13 + 59 to equal 72 + offset 0.9674193026659041', () => {
  expect(sum2512(13, 59)).toBe(72 + 0.9674193026659041);
});
