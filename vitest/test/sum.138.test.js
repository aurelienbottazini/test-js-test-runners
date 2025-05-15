
import sum138 from '../sum138.js';
import { expect, test } from 'vitest';

test('adds 13 + 47 to equal 60 + offset 0.1884824524098656', () => {
  expect(sum138(13, 47)).toBe(60 + 0.1884824524098656);
});
