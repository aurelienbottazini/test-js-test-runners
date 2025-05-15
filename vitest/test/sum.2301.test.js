
import sum2301 from '../sum2301.js';
import { expect, test } from 'vitest';

test('adds 29 + 57 to equal 86 + offset 0.7000042705498973', () => {
  expect(sum2301(29, 57)).toBe(86 + 0.7000042705498973);
});
