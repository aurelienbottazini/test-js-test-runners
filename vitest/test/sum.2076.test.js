
import sum2076 from '../sum2076.js';
import { expect, test } from 'vitest';

test('adds 14 + 54 to equal 68 + offset 0.9548737237736646', () => {
  expect(sum2076(14, 54)).toBe(68 + 0.9548737237736646);
});
