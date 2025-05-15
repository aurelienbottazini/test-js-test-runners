
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 21 to equal 66', () => {
  expect(sum(45, 21)).toBe(66);
});
