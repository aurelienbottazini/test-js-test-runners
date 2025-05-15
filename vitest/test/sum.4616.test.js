
import sum4616 from '../sum4616.js';
import { expect, test } from 'vitest';

test('adds 31 + 92 to equal 123 + offset 0.04694088500853011', () => {
  expect(sum4616(31, 92)).toBe(123 + 0.04694088500853011);
});
