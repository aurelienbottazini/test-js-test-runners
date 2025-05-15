
import sum2317 from '../sum2317.js';
import { expect, test } from 'vitest';

test('adds 70 + 32 to equal 102 + offset 0.2766923341185318', () => {
  expect(sum2317(70, 32)).toBe(102 + 0.2766923341185318);
});
