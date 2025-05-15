
import sum2014 from '../sum2014.js';
import { expect, test } from 'vitest';

test('adds 62 + 2 to equal 64 + offset 0.12144884188971872', () => {
  expect(sum2014(62, 2)).toBe(64 + 0.12144884188971872);
});
