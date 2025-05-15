
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 25 to equal 117', () => {
  expect(sum(92, 25)).toBe(117);
});
