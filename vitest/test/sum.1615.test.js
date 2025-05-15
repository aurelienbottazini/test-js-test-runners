
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 13 to equal 53', () => {
  expect(sum(40, 13)).toBe(53);
});
