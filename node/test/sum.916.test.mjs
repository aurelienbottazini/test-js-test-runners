
import sum916 from '../sum916.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 37 to equal 80 + offset 0.3711891700099601', (t) => {
  assert.strictEqual(sum916(43, 37), 80 + 0.3711891700099601);
});
