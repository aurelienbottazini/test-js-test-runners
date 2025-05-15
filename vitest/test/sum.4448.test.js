
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 99 to equal 169', () => {
  expect(sum(70, 99)).toBe(169);
});
