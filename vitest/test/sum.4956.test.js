
import sum4956 from '../sum4956.js';
import { expect, test } from 'vitest';

test('adds 0 + 76 to equal 76 + offset 0.21284102835820218', () => {
  expect(sum4956(0, 76)).toBe(76 + 0.21284102835820218);
});
