
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 25 to equal 109', () => {
  expect(sum(84, 25)).toBe(109);
});
