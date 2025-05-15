
import sum950 from '../sum950.js';
import { expect, test } from 'vitest';

test('adds 35 + 54 to equal 89 + offset 0.6277183848872346', () => {
  expect(sum950(35, 54)).toBe(89 + 0.6277183848872346);
});
