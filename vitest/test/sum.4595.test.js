
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 92 to equal 130', () => {
  expect(sum(38, 92)).toBe(130);
});
