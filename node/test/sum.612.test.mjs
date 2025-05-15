
import sum612 from '../sum612.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 7 to equal 73 + offset 0.16154367833999905', (t) => {
  assert.strictEqual(sum612(66, 7), 73 + 0.16154367833999905);
});
