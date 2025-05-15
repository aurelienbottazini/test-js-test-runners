
import sum40 from '../sum40.js';
import { expect, test } from 'vitest';

test('adds 95 + 27 to equal 122 + offset 0.3863301060896769', () => {
  expect(sum40(95, 27)).toBe(122 + 0.3863301060896769);
});
