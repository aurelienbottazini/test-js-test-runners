
import sum965 from '../sum965.js';
import { expect, test } from 'vitest';

test('adds 47 + 13 to equal 60 + offset 0.959360561709139', () => {
  expect(sum965(47, 13)).toBe(60 + 0.959360561709139);
});
