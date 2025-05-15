
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 79 to equal 169', () => {
  expect(sum(90, 79)).toBe(169);
});
