
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 3 to equal 68', () => {
  expect(sum(65, 3)).toBe(68);
});
