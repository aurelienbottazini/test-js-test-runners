
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 57 to equal 66', () => {
  expect(sum(9, 57)).toBe(66);
});
