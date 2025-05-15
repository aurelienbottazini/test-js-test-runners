
import sum3361 from '../sum3361.js';
import { expect, test } from 'vitest';

test('adds 46 + 51 to equal 97 + offset 0.30282398761598595', () => {
  expect(sum3361(46, 51)).toBe(97 + 0.30282398761598595);
});
