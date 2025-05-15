
import sum524 from '../sum524.js';
import { expect, test } from 'vitest';

test('adds 65 + 89 to equal 154 + offset 0.437914275954317', () => {
  expect(sum524(65, 89)).toBe(154 + 0.437914275954317);
});
