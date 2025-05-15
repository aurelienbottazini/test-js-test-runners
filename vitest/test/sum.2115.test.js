
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 63 to equal 125', () => {
  expect(sum(62, 63)).toBe(125);
});
