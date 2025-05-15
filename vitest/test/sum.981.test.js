
import sum981 from '../sum981.js';
import { expect, test } from 'vitest';

test('adds 77 + 15 to equal 92 + offset 0.9274029787734276', () => {
  expect(sum981(77, 15)).toBe(92 + 0.9274029787734276);
});
