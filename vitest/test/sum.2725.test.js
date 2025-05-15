
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 71 to equal 122', () => {
  expect(sum(51, 71)).toBe(122);
});
