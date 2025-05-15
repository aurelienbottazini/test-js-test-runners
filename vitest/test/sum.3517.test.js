
import sum3517 from '../sum3517.js';
import { expect, test } from 'vitest';

test('adds 54 + 85 to equal 139 + offset 0.06963435119202033', () => {
  expect(sum3517(54, 85)).toBe(139 + 0.06963435119202033);
});
