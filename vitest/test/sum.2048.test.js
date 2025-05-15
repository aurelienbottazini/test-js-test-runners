
import sum2048 from '../sum2048.js';
import { expect, test } from 'vitest';

test('adds 46 + 57 to equal 103 + offset 0.6265257906428214', () => {
  expect(sum2048(46, 57)).toBe(103 + 0.6265257906428214);
});
