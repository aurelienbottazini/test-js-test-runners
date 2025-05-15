
import sum1547 from '../sum1547.js';
import { expect, test } from 'vitest';

test('adds 52 + 26 to equal 78 + offset 0.5258955087002928', () => {
  expect(sum1547(52, 26)).toBe(78 + 0.5258955087002928);
});
