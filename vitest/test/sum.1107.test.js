
import sum1107 from '../sum1107.js';
import { expect, test } from 'vitest';

test('adds 43 + 77 to equal 120 + offset 0.9606215073408073', () => {
  expect(sum1107(43, 77)).toBe(120 + 0.9606215073408073);
});
