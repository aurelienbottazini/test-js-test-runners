
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 65 to equal 68', () => {
  expect(sum(3, 65)).toBe(68);
});
