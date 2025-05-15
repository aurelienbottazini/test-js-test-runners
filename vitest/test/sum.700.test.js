
import sum700 from '../sum700.js';
import { expect, test } from 'vitest';

test('adds 8 + 84 to equal 92 + offset 0.6837977629858926', () => {
  expect(sum700(8, 84)).toBe(92 + 0.6837977629858926);
});
