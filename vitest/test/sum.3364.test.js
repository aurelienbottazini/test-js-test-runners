
import sum3364 from '../sum3364.js';
import { expect, test } from 'vitest';

test('adds 8 + 5 to equal 13 + offset 0.5860269724651551', () => {
  expect(sum3364(8, 5)).toBe(13 + 0.5860269724651551);
});
