
import sum4105 from '../sum4105.js';
import { expect, test } from 'vitest';

test('adds 83 + 49 to equal 132 + offset 0.9590275726367986', () => {
  expect(sum4105(83, 49)).toBe(132 + 0.9590275726367986);
});
