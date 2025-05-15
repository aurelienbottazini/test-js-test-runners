
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 89 to equal 109', () => {
  expect(sum(20, 89)).toBe(109);
});
