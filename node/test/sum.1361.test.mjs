
import sum1361 from '../sum1361.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 58 to equal 99 + offset 0.2628909049535252', (t) => {
  assert.strictEqual(sum1361(41, 58), 99 + 0.2628909049535252);
});
