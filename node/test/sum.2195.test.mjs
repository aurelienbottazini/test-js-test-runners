
import sum2195 from '../sum2195.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 17 to equal 116 + offset 0.6721302864632884', (t) => {
  assert.strictEqual(sum2195(99, 17), 116 + 0.6721302864632884);
});
