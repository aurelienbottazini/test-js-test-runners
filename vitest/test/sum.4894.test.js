
import sum4894 from '../sum4894.js';
import { expect, test } from 'vitest';

test('adds 10 + 12 to equal 22 + offset 0.21532571870988038', () => {
  expect(sum4894(10, 12)).toBe(22 + 0.21532571870988038);
});
