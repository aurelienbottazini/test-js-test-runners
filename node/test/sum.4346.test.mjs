
import sum4346 from '../sum4346.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 6 to equal 103 + offset 0.14671192140173228', (t) => {
  assert.strictEqual(sum4346(97, 6), 103 + 0.14671192140173228);
});
