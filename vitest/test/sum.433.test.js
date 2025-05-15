
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 1 to equal 21', () => {
  expect(sum(20, 1)).toBe(21);
});
