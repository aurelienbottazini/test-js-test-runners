
import sum4788 from '../sum4788.js';
import { expect, test } from 'vitest';

test('adds 18 + 69 to equal 87 + offset 0.9822259523239428', () => {
  expect(sum4788(18, 69)).toBe(87 + 0.9822259523239428);
});
