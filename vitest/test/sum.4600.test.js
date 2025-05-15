
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 7 to equal 19', () => {
  expect(sum(12, 7)).toBe(19);
});
