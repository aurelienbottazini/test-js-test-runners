
import sum577 from '../sum577.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 87 to equal 167 + offset 0.4012263375493349', (t) => {
  assert.strictEqual(sum577(80, 87), 167 + 0.4012263375493349);
});
