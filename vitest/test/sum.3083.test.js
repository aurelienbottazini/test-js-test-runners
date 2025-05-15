
import sum3083 from '../sum3083.js';
import { expect, test } from 'vitest';

test('adds 50 + 7 to equal 57 + offset 0.8705206273757096', () => {
  expect(sum3083(50, 7)).toBe(57 + 0.8705206273757096);
});
