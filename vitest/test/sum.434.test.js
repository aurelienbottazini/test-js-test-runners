
import sum434 from '../sum434.js';
import { expect, test } from 'vitest';

test('adds 95 + 22 to equal 117 + offset 0.4205325401907798', () => {
  expect(sum434(95, 22)).toBe(117 + 0.4205325401907798);
});
