
import sum953 from '../sum953.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 91 to equal 136 + offset 0.9443984532682913', (t) => {
  assert.strictEqual(sum953(45, 91), 136 + 0.9443984532682913);
});
