
import sum1393 from '../sum1393.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 86 to equal 116 + offset 0.6486088293807424', (t) => {
  assert.strictEqual(sum1393(30, 86), 116 + 0.6486088293807424);
});
