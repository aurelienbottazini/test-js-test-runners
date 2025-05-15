
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 25 to equal 90', () => {
  expect(sum(65, 25)).toBe(90);
});
