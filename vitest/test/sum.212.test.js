
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 71 to equal 121', () => {
  expect(sum(50, 71)).toBe(121);
});
