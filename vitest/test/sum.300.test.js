
import sum300 from '../sum300.js';
import { expect, test } from 'vitest';

test('adds 23 + 45 to equal 68 + offset 0.9414680862273683', () => {
  expect(sum300(23, 45)).toBe(68 + 0.9414680862273683);
});
