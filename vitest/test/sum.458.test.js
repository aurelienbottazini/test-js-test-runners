
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 60 to equal 109', () => {
  expect(sum(49, 60)).toBe(109);
});
