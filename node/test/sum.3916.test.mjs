
import sum3916 from '../sum3916.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 14 to equal 53 + offset 0.8836246289808253', (t) => {
  assert.strictEqual(sum3916(39, 14), 53 + 0.8836246289808253);
});
