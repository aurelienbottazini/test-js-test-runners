
import sum4170 from '../sum4170.js';
import { expect, test } from 'vitest';

test('adds 96 + 79 to equal 175 + offset 0.617192582904577', () => {
  expect(sum4170(96, 79)).toBe(175 + 0.617192582904577);
});
