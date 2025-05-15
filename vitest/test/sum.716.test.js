
import sum716 from '../sum716.js';
import { expect, test } from 'vitest';

test('adds 84 + 96 to equal 180 + offset 0.26865892601000196', () => {
  expect(sum716(84, 96)).toBe(180 + 0.26865892601000196);
});
