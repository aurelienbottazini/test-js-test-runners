
import sum2656 from '../sum2656.js';
import { expect, test } from 'vitest';

test('adds 9 + 11 to equal 20 + offset 0.03679514577482523', () => {
  expect(sum2656(9, 11)).toBe(20 + 0.03679514577482523);
});
