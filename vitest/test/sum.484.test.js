
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 27 to equal 49', () => {
  expect(sum(22, 27)).toBe(49);
});
