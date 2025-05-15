
import sum2015 from '../sum2015.js';
import { expect, test } from 'vitest';

test('adds 92 + 34 to equal 126 + offset 0.22721678061225825', () => {
  expect(sum2015(92, 34)).toBe(126 + 0.22721678061225825);
});
