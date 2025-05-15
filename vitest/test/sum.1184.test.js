
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 35 to equal 39', () => {
  expect(sum(4, 35)).toBe(39);
});
