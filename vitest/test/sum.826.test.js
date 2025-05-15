
import sum826 from '../sum826.js';
import { expect, test } from 'vitest';

test('adds 19 + 9 to equal 28 + offset 0.8434027419816562', () => {
  expect(sum826(19, 9)).toBe(28 + 0.8434027419816562);
});
