
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 21 to equal 21', () => {
  expect(sum(0, 21)).toBe(21);
});
