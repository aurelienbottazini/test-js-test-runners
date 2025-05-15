
import sum3099 from '../sum3099.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 51 to equal 57 + offset 0.3518881541604857', (t) => {
  assert.strictEqual(sum3099(6, 51), 57 + 0.3518881541604857);
});
