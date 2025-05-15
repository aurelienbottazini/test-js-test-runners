
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 74 to equal 168', () => {
  expect(sum(94, 74)).toBe(168);
});
