
import sum4982 from '../sum4982.js';
import { expect, test } from 'vitest';

test('adds 94 + 58 to equal 152 + offset 0.06636434341798247', () => {
  expect(sum4982(94, 58)).toBe(152 + 0.06636434341798247);
});
