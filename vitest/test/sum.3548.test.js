
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 83 to equal 130', () => {
  expect(sum(47, 83)).toBe(130);
});
