
import sum1463 from '../sum1463.js';
import { expect, test } from 'vitest';

test('adds 92 + 20 to equal 112 + offset 0.491908388176467', () => {
  expect(sum1463(92, 20)).toBe(112 + 0.491908388176467);
});
