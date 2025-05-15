
import sum943 from '../sum943.js';
import { expect, test } from 'vitest';

test('adds 38 + 95 to equal 133 + offset 0.7229429689298911', () => {
  expect(sum943(38, 95)).toBe(133 + 0.7229429689298911);
});
