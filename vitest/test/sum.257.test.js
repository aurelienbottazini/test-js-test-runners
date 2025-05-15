
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 71 to equal 130', () => {
  expect(sum(59, 71)).toBe(130);
});
