
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 21 to equal 39', () => {
  expect(sum(18, 21)).toBe(39);
});
