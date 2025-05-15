
import sum856 from '../sum856.js';
import { expect, test } from 'vitest';

test('adds 93 + 94 to equal 187 + offset 0.4486030859368879', () => {
  expect(sum856(93, 94)).toBe(187 + 0.4486030859368879);
});
