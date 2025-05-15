
import sum4363 from '../sum4363.js';
import { expect, test } from 'vitest';

test('adds 24 + 93 to equal 117 + offset 0.2727926484077001', () => {
  expect(sum4363(24, 93)).toBe(117 + 0.2727926484077001);
});
