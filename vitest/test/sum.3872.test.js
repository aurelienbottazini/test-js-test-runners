
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 69 to equal 117', () => {
  expect(sum(48, 69)).toBe(117);
});
