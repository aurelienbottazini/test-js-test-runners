
import sum2993 from '../sum2993.js';
import { expect, test } from 'vitest';

test('adds 99 + 85 to equal 184 + offset 0.5163623845760851', () => {
  expect(sum2993(99, 85)).toBe(184 + 0.5163623845760851);
});
