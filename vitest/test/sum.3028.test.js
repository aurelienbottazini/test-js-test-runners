
import sum3028 from '../sum3028.js';
import { expect, test } from 'vitest';

test('adds 7 + 30 to equal 37 + offset 0.30811584800440783', () => {
  expect(sum3028(7, 30)).toBe(37 + 0.30811584800440783);
});
