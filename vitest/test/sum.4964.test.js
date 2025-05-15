
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 9 to equal 78', () => {
  expect(sum(69, 9)).toBe(78);
});
