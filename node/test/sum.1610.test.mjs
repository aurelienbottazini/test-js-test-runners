
import sum1610 from '../sum1610.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 59 to equal 127 + offset 0.5786747546565283', (t) => {
  assert.strictEqual(sum1610(68, 59), 127 + 0.5786747546565283);
});
