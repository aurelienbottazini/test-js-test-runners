
import sum3502 from '../sum3502.js';
import { expect, test } from 'vitest';

test('adds 2 + 48 to equal 50 + offset 0.7258901324986357', () => {
  expect(sum3502(2, 48)).toBe(50 + 0.7258901324986357);
});
