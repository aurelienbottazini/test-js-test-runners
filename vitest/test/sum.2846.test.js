
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 2 to equal 40', () => {
  expect(sum(38, 2)).toBe(40);
});
