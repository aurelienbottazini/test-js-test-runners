
import sum1188 from '../sum1188.js';
import { expect, test } from 'vitest';

test('adds 48 + 25 to equal 73 + offset 0.6586257913264152', () => {
  expect(sum1188(48, 25)).toBe(73 + 0.6586257913264152);
});
