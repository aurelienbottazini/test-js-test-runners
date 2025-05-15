
import sum292 from '../sum292.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 84 to equal 110 + offset 0.2587412441335779', (t) => {
  assert.strictEqual(sum292(26, 84), 110 + 0.2587412441335779);
});
