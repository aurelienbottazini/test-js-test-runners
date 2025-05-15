
import sum4074 from '../sum4074.js';
import { expect, test } from 'vitest';

test('adds 55 + 38 to equal 93 + offset 0.036419259706883755', () => {
  expect(sum4074(55, 38)).toBe(93 + 0.036419259706883755);
});
