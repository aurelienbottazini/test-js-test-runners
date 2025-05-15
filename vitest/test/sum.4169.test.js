
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 49 to equal 117', () => {
  expect(sum(68, 49)).toBe(117);
});
