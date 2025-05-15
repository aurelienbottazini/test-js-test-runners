
import sum944 from '../sum944.js';
import { expect, test } from 'vitest';

test('adds 39 + 29 to equal 68 + offset 0.4592636052698975', () => {
  expect(sum944(39, 29)).toBe(68 + 0.4592636052698975);
});
