
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 90 to equal 90', () => {
  expect(sum(0, 90)).toBe(90);
});
