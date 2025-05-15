
import sum176 from '../sum176.js';
import { expect, test } from 'vitest';

test('adds 81 + 26 to equal 107 + offset 0.7050261653840294', () => {
  expect(sum176(81, 26)).toBe(107 + 0.7050261653840294);
});
