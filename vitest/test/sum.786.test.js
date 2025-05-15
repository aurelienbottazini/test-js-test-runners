
import sum786 from '../sum786.js';
import { expect, test } from 'vitest';

test('adds 14 + 60 to equal 74 + offset 0.6740701289645354', () => {
  expect(sum786(14, 60)).toBe(74 + 0.6740701289645354);
});
