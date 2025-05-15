
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 33 to equal 39', () => {
  expect(sum(6, 33)).toBe(39);
});
