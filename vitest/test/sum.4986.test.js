
import sum4986 from '../sum4986.js';
import { expect, test } from 'vitest';

test('adds 79 + 39 to equal 118 + offset 0.565021424780556', () => {
  expect(sum4986(79, 39)).toBe(118 + 0.565021424780556);
});
