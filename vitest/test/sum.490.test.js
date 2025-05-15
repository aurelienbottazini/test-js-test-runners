
import sum490 from '../sum490.js';
import { expect, test } from 'vitest';

test('adds 90 + 76 to equal 166 + offset 0.28655259909410846', () => {
  expect(sum490(90, 76)).toBe(166 + 0.28655259909410846);
});
