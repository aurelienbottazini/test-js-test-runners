
import sum536 from '../sum536.js';
import { expect, test } from 'vitest';

test('adds 25 + 21 to equal 46 + offset 0.6394444504041215', () => {
  expect(sum536(25, 21)).toBe(46 + 0.6394444504041215);
});
