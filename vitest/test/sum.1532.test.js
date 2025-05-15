
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 29 to equal 109', () => {
  expect(sum(80, 29)).toBe(109);
});
