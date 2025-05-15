
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 27 to equal 31', () => {
  expect(sum(4, 27)).toBe(31);
});
