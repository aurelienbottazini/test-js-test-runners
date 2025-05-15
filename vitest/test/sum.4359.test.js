
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 62 to equal 90', () => {
  expect(sum(28, 62)).toBe(90);
});
