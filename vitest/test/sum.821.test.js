
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 32 to equal 68', () => {
  expect(sum(36, 32)).toBe(68);
});
