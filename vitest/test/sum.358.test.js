
import sum358 from '../sum358.js';
import { expect, test } from 'vitest';

test('adds 29 + 27 to equal 56 + offset 0.21586635504248985', () => {
  expect(sum358(29, 27)).toBe(56 + 0.21586635504248985);
});
