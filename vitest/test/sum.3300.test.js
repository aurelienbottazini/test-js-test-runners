
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 31 to equal 117', () => {
  expect(sum(86, 31)).toBe(117);
});
