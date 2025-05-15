
import sum4965 from '../sum4965.js';
import { expect, test } from 'vitest';

test('adds 57 + 17 to equal 74 + offset 0.33759605112456026', () => {
  expect(sum4965(57, 17)).toBe(74 + 0.33759605112456026);
});
