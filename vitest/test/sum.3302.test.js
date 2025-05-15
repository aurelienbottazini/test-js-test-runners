
import sum3302 from '../sum3302.js';
import { expect, test } from 'vitest';

test('adds 89 + 36 to equal 125 + offset 0.6322490089780113', () => {
  expect(sum3302(89, 36)).toBe(125 + 0.6322490089780113);
});
