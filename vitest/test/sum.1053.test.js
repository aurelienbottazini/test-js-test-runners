
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 7 to equal 45', () => {
  expect(sum(38, 7)).toBe(45);
});
