
import sum2974 from '../sum2974.js';
import { expect, test } from 'vitest';

test('adds 43 + 57 to equal 100 + offset 0.4043530946091487', () => {
  expect(sum2974(43, 57)).toBe(100 + 0.4043530946091487);
});
