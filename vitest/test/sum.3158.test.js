
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 38 to equal 91', () => {
  expect(sum(53, 38)).toBe(91);
});
