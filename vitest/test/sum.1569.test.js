
import sum1569 from '../sum1569.js';
import { expect, test } from 'vitest';

test('adds 79 + 78 to equal 157 + offset 0.8576464468777332', () => {
  expect(sum1569(79, 78)).toBe(157 + 0.8576464468777332);
});
