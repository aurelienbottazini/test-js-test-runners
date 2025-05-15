
import sum2577 from '../sum2577.js';
import { expect, test } from 'vitest';

test('adds 58 + 15 to equal 73 + offset 0.7458689286700027', () => {
  expect(sum2577(58, 15)).toBe(73 + 0.7458689286700027);
});
