
import sum1117 from '../sum1117.js';
import { expect, test } from 'vitest';

test('adds 72 + 79 to equal 151 + offset 0.7597906226367538', () => {
  expect(sum1117(72, 79)).toBe(151 + 0.7597906226367538);
});
