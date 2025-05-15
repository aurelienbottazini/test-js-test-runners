
import sum1121 from '../sum1121.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 36 to equal 75 + offset 0.9038330158737363', (t) => {
  assert.strictEqual(sum1121(39, 36), 75 + 0.9038330158737363);
});
