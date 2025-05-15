
import sum4197 from '../sum4197.js';
import { expect, test } from 'vitest';

test('adds 44 + 70 to equal 114 + offset 0.2211580247867987', () => {
  expect(sum4197(44, 70)).toBe(114 + 0.2211580247867987);
});
