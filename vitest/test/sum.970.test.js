
import sum970 from '../sum970.js';
import { expect, test } from 'vitest';

test('adds 72 + 70 to equal 142 + offset 0.3390962319189482', () => {
  expect(sum970(72, 70)).toBe(142 + 0.3390962319189482);
});
