
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 87 to equal 169', () => {
  expect(sum(82, 87)).toBe(169);
});
