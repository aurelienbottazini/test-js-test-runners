
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 67 to equal 109', () => {
  expect(sum(42, 67)).toBe(109);
});
