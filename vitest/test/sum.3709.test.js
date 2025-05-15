
import sum3709 from '../sum3709.js';
import { expect, test } from 'vitest';

test('adds 10 + 46 to equal 56 + offset 0.08059149711648195', () => {
  expect(sum3709(10, 46)).toBe(56 + 0.08059149711648195);
});
