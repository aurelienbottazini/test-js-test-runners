
import sum1593 from '../sum1593.js';
import { expect, test } from 'vitest';

test('adds 61 + 52 to equal 113 + offset 0.6719034570393552', () => {
  expect(sum1593(61, 52)).toBe(113 + 0.6719034570393552);
});
