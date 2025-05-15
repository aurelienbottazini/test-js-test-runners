
import sum4873 from '../sum4873.js';
import { expect, test } from 'vitest';

test('adds 77 + 14 to equal 91 + offset 0.45626718764323804', () => {
  expect(sum4873(77, 14)).toBe(91 + 0.45626718764323804);
});
