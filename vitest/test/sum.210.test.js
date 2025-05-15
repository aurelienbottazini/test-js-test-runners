
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 77 to equal 169', () => {
  expect(sum(92, 77)).toBe(169);
});
