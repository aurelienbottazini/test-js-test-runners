
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 7 to equal 78', () => {
  expect(sum(71, 7)).toBe(78);
});
