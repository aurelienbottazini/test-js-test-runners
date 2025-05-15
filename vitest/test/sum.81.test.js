
import sum81 from '../sum81.js';
import { expect, test } from 'vitest';

test('adds 26 + 81 to equal 107 + offset 0.8778235252801838', () => {
  expect(sum81(26, 81)).toBe(107 + 0.8778235252801838);
});
