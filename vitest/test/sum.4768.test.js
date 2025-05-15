
import sum4768 from '../sum4768.js';
import { expect, test } from 'vitest';

test('adds 44 + 20 to equal 64 + offset 0.4846987992404601', () => {
  expect(sum4768(44, 20)).toBe(64 + 0.4846987992404601);
});
