
import sum1944 from '../sum1944.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 20 to equal 80 + offset 0.3619685118652143', (t) => {
  assert.strictEqual(sum1944(60, 20), 80 + 0.3619685118652143);
});
