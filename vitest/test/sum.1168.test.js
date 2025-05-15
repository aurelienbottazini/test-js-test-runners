
import sum1168 from '../sum1168.js';
import { expect, test } from 'vitest';

test('adds 28 + 76 to equal 104 + offset 0.4976364354148173', () => {
  expect(sum1168(28, 76)).toBe(104 + 0.4976364354148173);
});
