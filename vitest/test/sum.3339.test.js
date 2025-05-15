
import sum3339 from '../sum3339.js';
import { expect, test } from 'vitest';

test('adds 22 + 23 to equal 45 + offset 0.24506965260043145', () => {
  expect(sum3339(22, 23)).toBe(45 + 0.24506965260043145);
});
