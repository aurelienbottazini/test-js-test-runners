
import sum3303 from '../sum3303.js';
import { expect, test } from 'vitest';

test('adds 39 + 31 to equal 70 + offset 0.8023157091264873', () => {
  expect(sum3303(39, 31)).toBe(70 + 0.8023157091264873);
});
