
import sum261 from '../sum261.js';
import { expect, test } from 'vitest';

test('adds 46 + 22 to equal 68 + offset 0.36466122520995337', () => {
  expect(sum261(46, 22)).toBe(68 + 0.36466122520995337);
});
