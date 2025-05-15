
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 73 to equal 169', () => {
  expect(sum(96, 73)).toBe(169);
});
