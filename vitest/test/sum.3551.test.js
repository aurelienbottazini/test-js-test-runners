
import sum3551 from '../sum3551.js';
import { expect, test } from 'vitest';

test('adds 77 + 86 to equal 163 + offset 0.713614425649868', () => {
  expect(sum3551(77, 86)).toBe(163 + 0.713614425649868);
});
