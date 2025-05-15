
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 76 to equal 117', () => {
  expect(sum(41, 76)).toBe(117);
});
