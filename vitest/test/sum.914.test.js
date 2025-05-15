
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 62 to equal 117', () => {
  expect(sum(55, 62)).toBe(117);
});
