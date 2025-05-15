
import sum2439 from '../sum2439.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 94 to equal 142 + offset 0.8506495155412546', (t) => {
  assert.strictEqual(sum2439(48, 94), 142 + 0.8506495155412546);
});
