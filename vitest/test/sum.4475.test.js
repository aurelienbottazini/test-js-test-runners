
import sum4475 from '../sum4475.js';
import { expect, test } from 'vitest';

test('adds 34 + 70 to equal 104 + offset 0.5473447362503532', () => {
  expect(sum4475(34, 70)).toBe(104 + 0.5473447362503532);
});
