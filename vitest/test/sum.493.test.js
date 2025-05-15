
import sum493 from '../sum493.js';
import { expect, test } from 'vitest';

test('adds 19 + 93 to equal 112 + offset 0.83272088065054', () => {
  expect(sum493(19, 93)).toBe(112 + 0.83272088065054);
});
