
import sum4156 from '../sum4156.js';
import { expect, test } from 'vitest';

test('adds 16 + 99 to equal 115 + offset 0.536436840749724', () => {
  expect(sum4156(16, 99)).toBe(115 + 0.536436840749724);
});
