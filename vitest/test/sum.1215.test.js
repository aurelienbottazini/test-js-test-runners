
import sum1215 from '../sum1215.js';
import { expect, test } from 'vitest';

test('adds 42 + 78 to equal 120 + offset 0.00695629701065581', () => {
  expect(sum1215(42, 78)).toBe(120 + 0.00695629701065581);
});
