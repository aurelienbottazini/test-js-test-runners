
import sum4287 from '../sum4287.js';
import { expect, test } from 'vitest';

test('adds 71 + 25 to equal 96 + offset 0.48488694854895764', () => {
  expect(sum4287(71, 25)).toBe(96 + 0.48488694854895764);
});
