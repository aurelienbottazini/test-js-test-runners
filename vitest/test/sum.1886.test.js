
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 49 to equal 90', () => {
  expect(sum(41, 49)).toBe(90);
});
