
import sum994 from '../sum994.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 37 to equal 93 + offset 0.906038176002837', (t) => {
  assert.strictEqual(sum994(56, 37), 93 + 0.906038176002837);
});
