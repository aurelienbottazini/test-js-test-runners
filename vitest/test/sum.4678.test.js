
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 21 to equal 90', () => {
  expect(sum(69, 21)).toBe(90);
});
