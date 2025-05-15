
import sum762 from '../sum762.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 51 to equal 82 + offset 0.4082984493035211', (t) => {
  assert.strictEqual(sum762(31, 51), 82 + 0.4082984493035211);
});
