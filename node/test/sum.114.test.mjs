
import sum114 from '../sum114.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 91 to equal 172 + offset 0.7376142260679546', (t) => {
  assert.strictEqual(sum114(81, 91), 172 + 0.7376142260679546);
});
