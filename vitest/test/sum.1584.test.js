
import sum1584 from '../sum1584.js';
import { expect, test } from 'vitest';

test('adds 91 + 77 to equal 168 + offset 0.5203250242983115', () => {
  expect(sum1584(91, 77)).toBe(168 + 0.5203250242983115);
});
