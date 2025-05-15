
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 81 to equal 117', () => {
  expect(sum(36, 81)).toBe(117);
});
