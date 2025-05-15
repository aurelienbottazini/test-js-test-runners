
import sum635 from '../sum635.js';
import { expect, test } from 'vitest';

test('adds 16 + 99 to equal 115 + offset 0.8196424270318259', () => {
  expect(sum635(16, 99)).toBe(115 + 0.8196424270318259);
});
