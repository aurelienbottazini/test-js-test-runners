
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 88 to equal 117', () => {
  expect(sum(29, 88)).toBe(117);
});
