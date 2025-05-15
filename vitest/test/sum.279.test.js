
import sum279 from '../sum279.js';
import { expect, test } from 'vitest';

test('adds 64 + 50 to equal 114 + offset 0.08351328273969327', () => {
  expect(sum279(64, 50)).toBe(114 + 0.08351328273969327);
});
