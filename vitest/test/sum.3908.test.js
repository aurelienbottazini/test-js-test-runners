
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 10 to equal 90', () => {
  expect(sum(80, 10)).toBe(90);
});
