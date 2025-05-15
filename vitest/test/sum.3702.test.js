
import sum3702 from '../sum3702.js';
import { expect, test } from 'vitest';

test('adds 19 + 25 to equal 44 + offset 0.42338420295724555', () => {
  expect(sum3702(19, 25)).toBe(44 + 0.42338420295724555);
});
