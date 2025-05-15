
import sum1936 from '../sum1936.js';
import { expect, test } from 'vitest';

test('adds 81 + 6 to equal 87 + offset 0.2570301896578856', () => {
  expect(sum1936(81, 6)).toBe(87 + 0.2570301896578856);
});
