
import sum136 from '../sum136.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 84 to equal 172 + offset 0.6925711054861164', (t) => {
  assert.strictEqual(sum136(88, 84), 172 + 0.6925711054861164);
});
