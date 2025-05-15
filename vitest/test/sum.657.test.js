
import sum657 from '../sum657.js';
import { expect, test } from 'vitest';

test('adds 73 + 59 to equal 132 + offset 0.37657204503486574', () => {
  expect(sum657(73, 59)).toBe(132 + 0.37657204503486574);
});
