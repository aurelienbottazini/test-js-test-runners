
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 65 to equal 90', () => {
  expect(sum(25, 65)).toBe(90);
});
