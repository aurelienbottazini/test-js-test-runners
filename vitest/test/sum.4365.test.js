
import sum4365 from '../sum4365.js';
import { expect, test } from 'vitest';

test('adds 43 + 40 to equal 83 + offset 0.5568302648083309', () => {
  expect(sum4365(43, 40)).toBe(83 + 0.5568302648083309);
});
