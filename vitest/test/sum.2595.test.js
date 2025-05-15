
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 16 to equal 109', () => {
  expect(sum(93, 16)).toBe(109);
});
