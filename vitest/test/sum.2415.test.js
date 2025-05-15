
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 22 to equal 39', () => {
  expect(sum(17, 22)).toBe(39);
});
