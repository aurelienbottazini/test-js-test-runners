
import sum850 from '../sum850.js';
import { expect, test } from 'vitest';

test('adds 73 + 72 to equal 145 + offset 0.37180404284885094', () => {
  expect(sum850(73, 72)).toBe(145 + 0.37180404284885094);
});
