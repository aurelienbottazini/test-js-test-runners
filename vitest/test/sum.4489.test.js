
import sum4489 from '../sum4489.js';
import { expect, test } from 'vitest';

test('adds 13 + 71 to equal 84 + offset 0.5881670723557654', () => {
  expect(sum4489(13, 71)).toBe(84 + 0.5881670723557654);
});
