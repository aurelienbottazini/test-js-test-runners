
import sum353 from '../sum353.js';
import { expect, test } from 'vitest';

test('adds 15 + 76 to equal 91 + offset 0.7557342226130276', () => {
  expect(sum353(15, 76)).toBe(91 + 0.7557342226130276);
});
