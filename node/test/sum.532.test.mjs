
import sum532 from '../sum532.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 1 to equal 66 + offset 0.6602584176811381', (t) => {
  assert.strictEqual(sum532(65, 1), 66 + 0.6602584176811381);
});
