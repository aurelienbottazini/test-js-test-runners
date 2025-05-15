
import sum599 from '../sum599.js';
import { expect, test } from 'vitest';

test('adds 59 + 15 to equal 74 + offset 0.4391885764239213', () => {
  expect(sum599(59, 15)).toBe(74 + 0.4391885764239213);
});
