
import sum3576 from '../sum3576.js';
import { expect, test } from 'vitest';

test('adds 88 + 41 to equal 129 + offset 0.2977738114795673', () => {
  expect(sum3576(88, 41)).toBe(129 + 0.2977738114795673);
});
