
import sum65 from '../sum65.js';
import { expect, test } from 'vitest';

test('adds 12 + 62 to equal 74 + offset 0.8523097508590557', () => {
  expect(sum65(12, 62)).toBe(74 + 0.8523097508590557);
});
