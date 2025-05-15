
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 4 to equal 38', () => {
  expect(sum(34, 4)).toBe(38);
});
