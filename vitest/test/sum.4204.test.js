
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 43 to equal 117', () => {
  expect(sum(74, 43)).toBe(117);
});
