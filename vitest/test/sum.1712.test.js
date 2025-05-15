
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 4 to equal 85', () => {
  expect(sum(81, 4)).toBe(85);
});
