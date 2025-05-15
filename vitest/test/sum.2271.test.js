
import sum2271 from '../sum2271.js';
import { expect, test } from 'vitest';

test('adds 55 + 32 to equal 87 + offset 0.7825576147117935', () => {
  expect(sum2271(55, 32)).toBe(87 + 0.7825576147117935);
});
