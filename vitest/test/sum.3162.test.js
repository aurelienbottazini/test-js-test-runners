
import sum3162 from '../sum3162.js';
import { expect, test } from 'vitest';

test('adds 44 + 30 to equal 74 + offset 0.3077699479540844', () => {
  expect(sum3162(44, 30)).toBe(74 + 0.3077699479540844);
});
