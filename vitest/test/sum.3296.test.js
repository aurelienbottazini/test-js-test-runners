
import sum3296 from '../sum3296.js';
import { expect, test } from 'vitest';

test('adds 65 + 76 to equal 141 + offset 0.165973580951842', () => {
  expect(sum3296(65, 76)).toBe(141 + 0.165973580951842);
});
