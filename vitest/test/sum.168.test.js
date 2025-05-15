
import sum168 from '../sum168.js';
import { expect, test } from 'vitest';

test('adds 11 + 15 to equal 26 + offset 0.5295791314856964', () => {
  expect(sum168(11, 15)).toBe(26 + 0.5295791314856964);
});
