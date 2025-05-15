
import sum1806 from '../sum1806.js';
import { expect, test } from 'vitest';

test('adds 53 + 32 to equal 85 + offset 0.4699552815949454', () => {
  expect(sum1806(53, 32)).toBe(85 + 0.4699552815949454);
});
