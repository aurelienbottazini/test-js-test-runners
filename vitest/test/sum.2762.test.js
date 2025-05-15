
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 78 to equal 90', () => {
  expect(sum(12, 78)).toBe(90);
});
