
import sum3029 from '../sum3029.js';
import { expect, test } from 'vitest';

test('adds 83 + 10 to equal 93 + offset 0.33638067352239454', () => {
  expect(sum3029(83, 10)).toBe(93 + 0.33638067352239454);
});
