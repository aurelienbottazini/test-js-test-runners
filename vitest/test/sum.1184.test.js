
import sum1184 from '../sum1184.js';
import { expect, test } from 'vitest';

test('adds 44 + 78 to equal 122 + offset 0.4260844987177672', () => {
  expect(sum1184(44, 78)).toBe(122 + 0.4260844987177672);
});
