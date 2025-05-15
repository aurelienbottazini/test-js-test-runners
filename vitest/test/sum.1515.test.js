
import sum1515 from '../sum1515.js';
import { expect, test } from 'vitest';

test('adds 7 + 58 to equal 65 + offset 0.5953058151349175', () => {
  expect(sum1515(7, 58)).toBe(65 + 0.5953058151349175);
});
