
import sum1733 from '../sum1733.js';
import { expect, test } from 'vitest';

test('adds 74 + 54 to equal 128 + offset 0.9348724904898397', () => {
  expect(sum1733(74, 54)).toBe(128 + 0.9348724904898397);
});
