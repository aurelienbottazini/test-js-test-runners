
import sum3154 from '../sum3154.js';
import { expect, test } from 'vitest';

test('adds 25 + 20 to equal 45 + offset 0.10661964548580605', () => {
  expect(sum3154(25, 20)).toBe(45 + 0.10661964548580605);
});
