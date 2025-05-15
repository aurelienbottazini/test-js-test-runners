
import sum4016 from '../sum4016.js';
import { expect, test } from 'vitest';

test('adds 43 + 84 to equal 127 + offset 0.30226099234020043', () => {
  expect(sum4016(43, 84)).toBe(127 + 0.30226099234020043);
});
