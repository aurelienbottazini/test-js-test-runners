
import sum4886 from '../sum4886.js';
import { expect, test } from 'vitest';

test('adds 2 + 38 to equal 40 + offset 0.921963160681048', () => {
  expect(sum4886(2, 38)).toBe(40 + 0.921963160681048);
});
