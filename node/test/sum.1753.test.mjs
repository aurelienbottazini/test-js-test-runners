
import sum1753 from '../sum1753.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 25 to equal 93 + offset 0.7724820578597413', (t) => {
  assert.strictEqual(sum1753(68, 25), 93 + 0.7724820578597413);
});
