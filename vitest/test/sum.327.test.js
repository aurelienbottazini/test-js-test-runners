
import sum327 from '../sum327.js';
import { expect, test } from 'vitest';

test('adds 62 + 9 to equal 71 + offset 0.0012708345720696679', () => {
  expect(sum327(62, 9)).toBe(71 + 0.0012708345720696679);
});
