
import sum881 from '../sum881.js';
import { expect, test } from 'vitest';

test('adds 56 + 4 to equal 60 + offset 0.1955154729255144', () => {
  expect(sum881(56, 4)).toBe(60 + 0.1955154729255144);
});
