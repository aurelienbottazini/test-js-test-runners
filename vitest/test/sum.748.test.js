
import sum748 from '../sum748.js';
import { expect, test } from 'vitest';

test('adds 74 + 30 to equal 104 + offset 0.860973379110459', () => {
  expect(sum748(74, 30)).toBe(104 + 0.860973379110459);
});
