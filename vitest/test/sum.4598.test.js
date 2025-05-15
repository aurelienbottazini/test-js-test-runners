
import sum4598 from '../sum4598.js';
import { expect, test } from 'vitest';

test('adds 84 + 25 to equal 109 + offset 0.28059349931138944', () => {
  expect(sum4598(84, 25)).toBe(109 + 0.28059349931138944);
});
