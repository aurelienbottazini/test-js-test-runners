
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 0 to equal 17', () => {
  expect(sum(17, 0)).toBe(17);
});
