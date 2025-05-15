
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 65 to equal 109', () => {
  expect(sum(44, 65)).toBe(109);
});
