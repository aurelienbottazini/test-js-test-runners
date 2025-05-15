
import sum390 from '../sum390.js';
import { expect, test } from 'vitest';

test('adds 13 + 61 to equal 74 + offset 0.667853604467338', () => {
  expect(sum390(13, 61)).toBe(74 + 0.667853604467338);
});
