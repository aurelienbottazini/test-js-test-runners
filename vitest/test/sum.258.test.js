
import sum258 from '../sum258.js';
import { expect, test } from 'vitest';

test('adds 45 + 30 to equal 75 + offset 0.1861409051657441', () => {
  expect(sum258(45, 30)).toBe(75 + 0.1861409051657441);
});
