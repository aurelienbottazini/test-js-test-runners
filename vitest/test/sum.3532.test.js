
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 79 to equal 117', () => {
  expect(sum(38, 79)).toBe(117);
});
