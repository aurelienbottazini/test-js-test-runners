
import sum287 from '../sum287.js';
import { expect, test } from 'vitest';

test('adds 91 + 54 to equal 145 + offset 0.9301124274137299', () => {
  expect(sum287(91, 54)).toBe(145 + 0.9301124274137299);
});
