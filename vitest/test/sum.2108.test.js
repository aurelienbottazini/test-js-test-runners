
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 1 to equal 39', () => {
  expect(sum(38, 1)).toBe(39);
});
