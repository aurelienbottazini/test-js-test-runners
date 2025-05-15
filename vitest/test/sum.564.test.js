
import sum564 from '../sum564.js';
import { expect, test } from 'vitest';

test('adds 1 + 35 to equal 36 + offset 0.4858309203829736', () => {
  expect(sum564(1, 35)).toBe(36 + 0.4858309203829736);
});
