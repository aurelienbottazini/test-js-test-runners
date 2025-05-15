
import sum4152 from '../sum4152.js';
import { expect, test } from 'vitest';

test('adds 68 + 52 to equal 120 + offset 0.9846900500716163', () => {
  expect(sum4152(68, 52)).toBe(120 + 0.9846900500716163);
});
