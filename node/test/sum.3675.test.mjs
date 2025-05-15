
import sum3675 from '../sum3675.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 59 to equal 85 + offset 0.858368162134296', (t) => {
  assert.strictEqual(sum3675(26, 59), 85 + 0.858368162134296);
});
