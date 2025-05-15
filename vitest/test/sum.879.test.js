
import sum879 from '../sum879.js';
import { expect, test } from 'vitest';

test('adds 63 + 64 to equal 127 + offset 0.958145253866634', () => {
  expect(sum879(63, 64)).toBe(127 + 0.958145253866634);
});
