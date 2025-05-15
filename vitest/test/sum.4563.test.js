
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 22 to equal 49', () => {
  expect(sum(27, 22)).toBe(49);
});
