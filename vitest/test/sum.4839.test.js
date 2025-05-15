
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 48 to equal 130', () => {
  expect(sum(82, 48)).toBe(130);
});
