
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 27 to equal 38', () => {
  expect(sum(11, 27)).toBe(38);
});
