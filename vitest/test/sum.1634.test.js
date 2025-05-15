
import sum1634 from '../sum1634.js';
import { expect, test } from 'vitest';

test('adds 87 + 32 to equal 119 + offset 0.5341603969540908', () => {
  expect(sum1634(87, 32)).toBe(119 + 0.5341603969540908);
});
