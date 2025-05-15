
import sum1825 from '../sum1825.js';
import { expect, test } from 'vitest';

test('adds 82 + 25 to equal 107 + offset 0.4126615511250741', () => {
  expect(sum1825(82, 25)).toBe(107 + 0.4126615511250741);
});
