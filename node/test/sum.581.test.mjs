
import sum581 from '../sum581.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 53 to equal 97 + offset 0.6523845224458131', (t) => {
  assert.strictEqual(sum581(44, 53), 97 + 0.6523845224458131);
});
