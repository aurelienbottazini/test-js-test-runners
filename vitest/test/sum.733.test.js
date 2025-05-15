
import sum733 from '../sum733.js';
import { expect, test } from 'vitest';

test('adds 84 + 38 to equal 122 + offset 0.5807792171500727', () => {
  expect(sum733(84, 38)).toBe(122 + 0.5807792171500727);
});
