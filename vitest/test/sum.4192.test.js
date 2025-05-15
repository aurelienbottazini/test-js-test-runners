
import sum4192 from '../sum4192.js';
import { expect, test } from 'vitest';

test('adds 93 + 2 to equal 95 + offset 0.9370493911050247', () => {
  expect(sum4192(93, 2)).toBe(95 + 0.9370493911050247);
});
