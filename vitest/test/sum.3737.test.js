
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 38 to equal 40', () => {
  expect(sum(2, 38)).toBe(40);
});
