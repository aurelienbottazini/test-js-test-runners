
import sum4699 from '../sum4699.js';
import { expect, test } from 'vitest';

test('adds 12 + 99 to equal 111 + offset 0.7185686126476462', () => {
  expect(sum4699(12, 99)).toBe(111 + 0.7185686126476462);
});
