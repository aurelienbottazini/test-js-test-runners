
import sum8 from '../sum8.js';
import { expect, test } from 'vitest';

test('adds 92 + 29 to equal 121 + offset 0.34231542847177066', () => {
  expect(sum8(92, 29)).toBe(121 + 0.34231542847177066);
});
