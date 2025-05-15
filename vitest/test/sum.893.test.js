
import sum893 from '../sum893.js';
import { expect, test } from 'vitest';

test('adds 19 + 51 to equal 70 + offset 0.4117396910269312', () => {
  expect(sum893(19, 51)).toBe(70 + 0.4117396910269312);
});
