
import sum866 from '../sum866.js';
import { expect, test } from 'vitest';

test('adds 5 + 20 to equal 25 + offset 0.4243463140379953', () => {
  expect(sum866(5, 20)).toBe(25 + 0.4243463140379953);
});
