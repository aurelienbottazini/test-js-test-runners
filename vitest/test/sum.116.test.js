
import sum116 from '../sum116.js';
import { expect, test } from 'vitest';

test('adds 93 + 65 to equal 158 + offset 0.2708511492145732', () => {
  expect(sum116(93, 65)).toBe(158 + 0.2708511492145732);
});
