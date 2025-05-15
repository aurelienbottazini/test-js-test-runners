
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 90 to equal 109', () => {
  expect(sum(19, 90)).toBe(109);
});
