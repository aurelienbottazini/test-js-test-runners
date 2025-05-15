
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 16 to equal 19', () => {
  expect(sum(3, 16)).toBe(19);
});
