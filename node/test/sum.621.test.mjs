
import sum621 from '../sum621.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 93 to equal 171 + offset 0.8731918292264753', (t) => {
  assert.strictEqual(sum621(78, 93), 171 + 0.8731918292264753);
});
