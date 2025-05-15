
import sum1572 from '../sum1572.js';
import { expect, test } from 'vitest';

test('adds 48 + 92 to equal 140 + offset 0.1557033888687006', () => {
  expect(sum1572(48, 92)).toBe(140 + 0.1557033888687006);
});
