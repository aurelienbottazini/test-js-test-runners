
import sum1162 from '../sum1162.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 16 to equal 41 + offset 0.25776388293676555', (t) => {
  assert.strictEqual(sum1162(25, 16), 41 + 0.25776388293676555);
});
