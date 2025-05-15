
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 75 to equal 169', () => {
  expect(sum(94, 75)).toBe(169);
});
