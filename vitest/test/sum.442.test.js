
import sum442 from '../sum442.js';
import { expect, test } from 'vitest';

test('adds 64 + 38 to equal 102 + offset 0.5841378357494895', () => {
  expect(sum442(64, 38)).toBe(102 + 0.5841378357494895);
});
