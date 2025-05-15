
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 1 to equal 17', () => {
  expect(sum(16, 1)).toBe(17);
});
