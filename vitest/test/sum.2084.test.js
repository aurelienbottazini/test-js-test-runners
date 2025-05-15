
import sum2084 from '../sum2084.js';
import { expect, test } from 'vitest';

test('adds 31 + 80 to equal 111 + offset 0.4235767045056734', () => {
  expect(sum2084(31, 80)).toBe(111 + 0.4235767045056734);
});
