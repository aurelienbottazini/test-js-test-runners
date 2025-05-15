
import sum4214 from '../sum4214.js';
import { expect, test } from 'vitest';

test('adds 40 + 52 to equal 92 + offset 0.3189638493210887', () => {
  expect(sum4214(40, 52)).toBe(92 + 0.3189638493210887);
});
