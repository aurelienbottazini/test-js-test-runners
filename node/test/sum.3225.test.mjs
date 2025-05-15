
import sum3225 from '../sum3225.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 52 to equal 139 + offset 0.7722216392847937', (t) => {
  assert.strictEqual(sum3225(87, 52), 139 + 0.7722216392847937);
});
