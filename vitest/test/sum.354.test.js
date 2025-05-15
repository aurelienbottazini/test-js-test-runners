
import sum354 from '../sum354.js';
import { expect, test } from 'vitest';

test('adds 55 + 55 to equal 110 + offset 0.5220438037229627', () => {
  expect(sum354(55, 55)).toBe(110 + 0.5220438037229627);
});
