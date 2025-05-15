
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 7 to equal 68', () => {
  expect(sum(61, 7)).toBe(68);
});
