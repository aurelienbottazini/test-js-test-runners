
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 32 to equal 109', () => {
  expect(sum(77, 32)).toBe(109);
});
