
import sum220 from '../sum220.js';
import { expect, test } from 'vitest';

test('adds 30 + 63 to equal 93 + offset 0.08878087749655228', () => {
  expect(sum220(30, 63)).toBe(93 + 0.08878087749655228);
});
