
import sum2540 from '../sum2540.js';
import { expect, test } from 'vitest';

test('adds 19 + 20 to equal 39 + offset 0.6541249314426556', () => {
  expect(sum2540(19, 20)).toBe(39 + 0.6541249314426556);
});
