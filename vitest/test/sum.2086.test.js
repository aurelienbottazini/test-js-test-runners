
import sum2086 from '../sum2086.js';
import { expect, test } from 'vitest';

test('adds 65 + 54 to equal 119 + offset 0.7528107074854518', () => {
  expect(sum2086(65, 54)).toBe(119 + 0.7528107074854518);
});
