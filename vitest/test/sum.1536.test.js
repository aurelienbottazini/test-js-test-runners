
import sum1536 from '../sum1536.js';
import { expect, test } from 'vitest';

test('adds 39 + 13 to equal 52 + offset 0.5693026592536129', () => {
  expect(sum1536(39, 13)).toBe(52 + 0.5693026592536129);
});
