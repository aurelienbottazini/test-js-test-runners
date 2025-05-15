
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 69 to equal 122', () => {
  expect(sum(53, 69)).toBe(122);
});
