
import sum541 from '../sum541.js';
import { expect, test } from 'vitest';

test('adds 38 + 15 to equal 53 + offset 0.8651265612855302', () => {
  expect(sum541(38, 15)).toBe(53 + 0.8651265612855302);
});
