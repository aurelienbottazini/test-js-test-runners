
import sum3729 from '../sum3729.js';
import { expect, test } from 'vitest';

test('adds 62 + 35 to equal 97 + offset 0.11695550745175143', () => {
  expect(sum3729(62, 35)).toBe(97 + 0.11695550745175143);
});
