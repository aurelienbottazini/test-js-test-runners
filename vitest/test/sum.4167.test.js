
import sum4167 from '../sum4167.js';
import { expect, test } from 'vitest';

test('adds 59 + 49 to equal 108 + offset 0.6288186639550569', () => {
  expect(sum4167(59, 49)).toBe(108 + 0.6288186639550569);
});
