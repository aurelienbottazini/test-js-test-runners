
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 81 to equal 130', () => {
  expect(sum(49, 81)).toBe(130);
});
