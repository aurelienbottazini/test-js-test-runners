
import sum2561 from '../sum2561.js';
import { expect, test } from 'vitest';

test('adds 93 + 35 to equal 128 + offset 0.9846231082528022', () => {
  expect(sum2561(93, 35)).toBe(128 + 0.9846231082528022);
});
