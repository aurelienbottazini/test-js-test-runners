
import sum3206 from '../sum3206.js';
import { expect, test } from 'vitest';

test('adds 79 + 93 to equal 172 + offset 0.9417669574394064', () => {
  expect(sum3206(79, 93)).toBe(172 + 0.9417669574394064);
});
