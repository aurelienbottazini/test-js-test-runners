
import sum4388 from '../sum4388.js';
import { expect, test } from 'vitest';

test('adds 49 + 22 to equal 71 + offset 0.4096963611019676', () => {
  expect(sum4388(49, 22)).toBe(71 + 0.4096963611019676);
});
