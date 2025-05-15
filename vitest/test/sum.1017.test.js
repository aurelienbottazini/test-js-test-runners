
import sum1017 from '../sum1017.js';
import { expect, test } from 'vitest';

test('adds 48 + 51 to equal 99 + offset 0.5146099913331108', () => {
  expect(sum1017(48, 51)).toBe(99 + 0.5146099913331108);
});
