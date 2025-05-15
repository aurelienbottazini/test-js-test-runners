
import sum3009 from '../sum3009.js';
import { expect, test } from 'vitest';

test('adds 45 + 63 to equal 108 + offset 0.8606369548639101', () => {
  expect(sum3009(45, 63)).toBe(108 + 0.8606369548639101);
});
