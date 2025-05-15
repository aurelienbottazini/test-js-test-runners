
import sum3418 from '../sum3418.js';
import { expect, test } from 'vitest';

test('adds 97 + 8 to equal 105 + offset 0.5446982864350525', () => {
  expect(sum3418(97, 8)).toBe(105 + 0.5446982864350525);
});
