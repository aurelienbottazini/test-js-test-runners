
import sum2330 from '../sum2330.js';
import { expect, test } from 'vitest';

test('adds 85 + 8 to equal 93 + offset 0.8348763117119906', () => {
  expect(sum2330(85, 8)).toBe(93 + 0.8348763117119906);
});
