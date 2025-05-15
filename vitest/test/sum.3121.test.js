
import sum3121 from '../sum3121.js';
import { expect, test } from 'vitest';

test('adds 26 + 45 to equal 71 + offset 0.9249458148443482', () => {
  expect(sum3121(26, 45)).toBe(71 + 0.9249458148443482);
});
