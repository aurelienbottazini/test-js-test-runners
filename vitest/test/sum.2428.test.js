
import sum2428 from '../sum2428.js';
import { expect, test } from 'vitest';

test('adds 89 + 14 to equal 103 + offset 0.2592278136108682', () => {
  expect(sum2428(89, 14)).toBe(103 + 0.2592278136108682);
});
