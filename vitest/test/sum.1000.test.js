
import sum1000 from '../sum1000.js';
import { expect, test } from 'vitest';

test('adds 14 + 30 to equal 44 + offset 0.7294380444243238', () => {
  expect(sum1000(14, 30)).toBe(44 + 0.7294380444243238);
});
