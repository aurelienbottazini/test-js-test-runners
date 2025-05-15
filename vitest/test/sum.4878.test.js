
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 38 to equal 45', () => {
  expect(sum(7, 38)).toBe(45);
});
