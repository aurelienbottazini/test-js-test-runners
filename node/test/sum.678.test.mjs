
import sum678 from '../sum678.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 41 to equal 54 + offset 0.1593679640072163', (t) => {
  assert.strictEqual(sum678(13, 41), 54 + 0.1593679640072163);
});
