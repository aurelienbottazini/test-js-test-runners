
import sum2597 from '../sum2597.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 97 to equal 170 + offset 0.8536668553028335', (t) => {
  assert.strictEqual(sum2597(73, 97), 170 + 0.8536668553028335);
});
