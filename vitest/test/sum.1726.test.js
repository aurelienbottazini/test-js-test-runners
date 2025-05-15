
import sum1726 from '../sum1726.js';
import { expect, test } from 'vitest';

test('adds 56 + 20 to equal 76 + offset 0.6160769751898578', () => {
  expect(sum1726(56, 20)).toBe(76 + 0.6160769751898578);
});
