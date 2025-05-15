
import sum1649 from '../sum1649.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 95 to equal 131 + offset 0.8745644646972641', (t) => {
  assert.strictEqual(sum1649(36, 95), 131 + 0.8745644646972641);
});
