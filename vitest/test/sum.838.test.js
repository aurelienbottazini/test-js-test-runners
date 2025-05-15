
import sum838 from '../sum838.js';
import { expect, test } from 'vitest';

test('adds 83 + 49 to equal 132 + offset 0.7062474624305507', () => {
  expect(sum838(83, 49)).toBe(132 + 0.7062474624305507);
});
