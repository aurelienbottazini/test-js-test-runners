
import sum4928 from '../sum4928.js';
import { expect, test } from 'vitest';

test('adds 36 + 89 to equal 125 + offset 0.5252710873687414', () => {
  expect(sum4928(36, 89)).toBe(125 + 0.5252710873687414);
});
