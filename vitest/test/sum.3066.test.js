
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 3 to equal 17', () => {
  expect(sum(14, 3)).toBe(17);
});
