
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 38 to equal 90', () => {
  expect(sum(52, 38)).toBe(90);
});
