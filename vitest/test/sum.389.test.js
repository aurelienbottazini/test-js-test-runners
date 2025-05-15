
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 64 to equal 109', () => {
  expect(sum(45, 64)).toBe(109);
});
