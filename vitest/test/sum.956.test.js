
import sum956 from '../sum956.js';
import { expect, test } from 'vitest';

test('adds 41 + 4 to equal 45 + offset 0.9571284728802285', () => {
  expect(sum956(41, 4)).toBe(45 + 0.9571284728802285);
});
