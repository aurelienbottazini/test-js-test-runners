
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 71 to equal 86', () => {
  expect(sum(15, 71)).toBe(86);
});
