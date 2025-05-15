
import sum614 from '../sum614.js';
import { expect, test } from 'vitest';

test('adds 33 + 74 to equal 107 + offset 0.22117159545581866', () => {
  expect(sum614(33, 74)).toBe(107 + 0.22117159545581866);
});
