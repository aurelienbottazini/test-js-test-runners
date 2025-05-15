
import sum1286 from '../sum1286.js';
import { expect, test } from 'vitest';

test('adds 17 + 78 to equal 95 + offset 0.592268641019426', () => {
  expect(sum1286(17, 78)).toBe(95 + 0.592268641019426);
});
