
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 85 to equal 182', () => {
  expect(sum(97, 85)).toBe(182);
});
