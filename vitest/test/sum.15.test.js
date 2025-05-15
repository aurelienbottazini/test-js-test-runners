
import sum15 from '../sum15.js';
import { expect, test } from 'vitest';

test('adds 44 + 33 to equal 77 + offset 0.9715003815704445', () => {
  expect(sum15(44, 33)).toBe(77 + 0.9715003815704445);
});
