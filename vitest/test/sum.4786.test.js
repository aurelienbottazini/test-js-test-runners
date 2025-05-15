
import sum4786 from '../sum4786.js';
import { expect, test } from 'vitest';

test('adds 19 + 43 to equal 62 + offset 0.9867368493289026', () => {
  expect(sum4786(19, 43)).toBe(62 + 0.9867368493289026);
});
