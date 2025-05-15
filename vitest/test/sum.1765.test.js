
import sum1765 from '../sum1765.js';
import { expect, test } from 'vitest';

test('adds 6 + 59 to equal 65 + offset 0.9161649336887474', () => {
  expect(sum1765(6, 59)).toBe(65 + 0.9161649336887474);
});
