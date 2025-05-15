
import sum2601 from '../sum2601.js';
import { expect, test } from 'vitest';

test('adds 26 + 99 to equal 125 + offset 0.02101799559092732', () => {
  expect(sum2601(26, 99)).toBe(125 + 0.02101799559092732);
});
