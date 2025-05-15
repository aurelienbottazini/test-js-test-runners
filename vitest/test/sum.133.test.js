
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 4 to equal 22', () => {
  expect(sum(18, 4)).toBe(22);
});
