
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 49 to equal 106', () => {
  expect(sum(57, 49)).toBe(106);
});
