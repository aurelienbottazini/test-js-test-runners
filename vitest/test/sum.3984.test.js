
import sum3984 from '../sum3984.js';
import { expect, test } from 'vitest';

test('adds 40 + 77 to equal 117 + offset 0.3733998521242684', () => {
  expect(sum3984(40, 77)).toBe(117 + 0.3733998521242684);
});
