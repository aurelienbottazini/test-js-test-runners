
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 50 to equal 132', () => {
  expect(sum(82, 50)).toBe(132);
});
