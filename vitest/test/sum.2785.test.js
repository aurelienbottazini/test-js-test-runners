
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 47 to equal 130', () => {
  expect(sum(83, 47)).toBe(130);
});
