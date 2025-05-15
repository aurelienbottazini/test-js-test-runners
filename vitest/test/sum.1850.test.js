
import sum1850 from '../sum1850.js';
import { expect, test } from 'vitest';

test('adds 22 + 71 to equal 93 + offset 0.15594561856858902', () => {
  expect(sum1850(22, 71)).toBe(93 + 0.15594561856858902);
});
