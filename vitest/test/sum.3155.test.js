
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 74 to equal 169', () => {
  expect(sum(95, 74)).toBe(169);
});
