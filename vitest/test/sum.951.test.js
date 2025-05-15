
import sum951 from '../sum951.js';
import { expect, test } from 'vitest';

test('adds 46 + 35 to equal 81 + offset 0.21281744267660685', () => {
  expect(sum951(46, 35)).toBe(81 + 0.21281744267660685);
});
