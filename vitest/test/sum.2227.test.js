
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 21 to equal 49', () => {
  expect(sum(28, 21)).toBe(49);
});
