
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 59 to equal 117', () => {
  expect(sum(58, 59)).toBe(117);
});
