
import sum2151 from '../sum2151.js';
import { expect, test } from 'vitest';

test('adds 22 + 33 to equal 55 + offset 0.8455572968348113', () => {
  expect(sum2151(22, 33)).toBe(55 + 0.8455572968348113);
});
