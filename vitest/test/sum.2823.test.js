
import sum2823 from '../sum2823.js';
import { expect, test } from 'vitest';

test('adds 13 + 90 to equal 103 + offset 0.014835451371054353', () => {
  expect(sum2823(13, 90)).toBe(103 + 0.014835451371054353);
});
