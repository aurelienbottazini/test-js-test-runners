
import sum2315 from '../sum2315.js';
import { expect, test } from 'vitest';

test('adds 18 + 75 to equal 93 + offset 0.4514138112382372', () => {
  expect(sum2315(18, 75)).toBe(93 + 0.4514138112382372);
});
