
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 43 to equal 97', () => {
  expect(sum(54, 43)).toBe(97);
});
