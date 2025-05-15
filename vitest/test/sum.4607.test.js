
import sum4607 from '../sum4607.js';
import { expect, test } from 'vitest';

test('adds 78 + 87 to equal 165 + offset 0.21385802362592787', () => {
  expect(sum4607(78, 87)).toBe(165 + 0.21385802362592787);
});
