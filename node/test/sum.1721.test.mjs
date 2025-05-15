
import sum1721 from '../sum1721.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 94 to equal 150 + offset 0.5848723598847084', (t) => {
  assert.strictEqual(sum1721(56, 94), 150 + 0.5848723598847084);
});
