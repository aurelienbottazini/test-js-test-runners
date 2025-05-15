
import sum4884 from '../sum4884.js';
import { expect, test } from 'vitest';

test('adds 31 + 17 to equal 48 + offset 0.2169616572980959', () => {
  expect(sum4884(31, 17)).toBe(48 + 0.2169616572980959);
});
