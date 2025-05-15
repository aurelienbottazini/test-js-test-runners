
import sum3389 from '../sum3389.js';
import { expect, test } from 'vitest';

test('adds 37 + 95 to equal 132 + offset 0.32014691568388076', () => {
  expect(sum3389(37, 95)).toBe(132 + 0.32014691568388076);
});
