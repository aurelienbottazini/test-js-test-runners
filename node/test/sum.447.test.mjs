
import sum447 from '../sum447.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 42 to equal 98 + offset 0.5189287033516882', (t) => {
  assert.strictEqual(sum447(56, 42), 98 + 0.5189287033516882);
});
