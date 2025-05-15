
import sum4900 from '../sum4900.js';
import { expect, test } from 'vitest';

test('adds 14 + 89 to equal 103 + offset 0.7048187812887673', () => {
  expect(sum4900(14, 89)).toBe(103 + 0.7048187812887673);
});
