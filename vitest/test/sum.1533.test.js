
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 63 to equal 153', () => {
  expect(sum(90, 63)).toBe(153);
});
