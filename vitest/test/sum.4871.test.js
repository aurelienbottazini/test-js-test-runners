
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 57 to equal 131', () => {
  expect(sum(74, 57)).toBe(131);
});
