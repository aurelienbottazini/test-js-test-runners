
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 68 to equal 83', () => {
  expect(sum(15, 68)).toBe(83);
});
