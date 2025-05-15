
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 54 to equal 109', () => {
  expect(sum(55, 54)).toBe(109);
});
