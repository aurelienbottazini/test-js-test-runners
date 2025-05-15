
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 83 to equal 172', () => {
  expect(sum(89, 83)).toBe(172);
});
