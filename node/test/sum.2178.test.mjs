
import sum2178 from '../sum2178.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 89 to equal 153 + offset 0.4156875812717833', (t) => {
  assert.strictEqual(sum2178(64, 89), 153 + 0.4156875812717833);
});
