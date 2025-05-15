
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 78 to equal 101', () => {
  expect(sum(23, 78)).toBe(101);
});
