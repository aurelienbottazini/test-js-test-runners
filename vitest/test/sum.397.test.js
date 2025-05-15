
import sum397 from '../sum397.js';
import { expect, test } from 'vitest';

test('adds 1 + 76 to equal 77 + offset 0.5679870096189442', () => {
  expect(sum397(1, 76)).toBe(77 + 0.5679870096189442);
});
