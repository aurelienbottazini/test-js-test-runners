
import sum845 from '../sum845.js';
import { expect, test } from 'vitest';

test('adds 19 + 64 to equal 83 + offset 0.7844502789898561', () => {
  expect(sum845(19, 64)).toBe(83 + 0.7844502789898561);
});
