
import sum878 from '../sum878.js';
import { expect, test } from 'vitest';

test('adds 83 + 30 to equal 113 + offset 0.48782061236793717', () => {
  expect(sum878(83, 30)).toBe(113 + 0.48782061236793717);
});
