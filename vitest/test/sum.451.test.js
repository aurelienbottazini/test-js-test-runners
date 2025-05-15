
import sum451 from '../sum451.js';
import { expect, test } from 'vitest';

test('adds 71 + 78 to equal 149 + offset 0.593170512090572', () => {
  expect(sum451(71, 78)).toBe(149 + 0.593170512090572);
});
