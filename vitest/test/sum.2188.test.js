
import sum2188 from '../sum2188.js';
import { expect, test } from 'vitest';

test('adds 28 + 3 to equal 31 + offset 0.07700280240667368', () => {
  expect(sum2188(28, 3)).toBe(31 + 0.07700280240667368);
});
