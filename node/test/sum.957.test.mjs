
import sum957 from '../sum957.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 78 to equal 144 + offset 0.5873765892812062', (t) => {
  assert.strictEqual(sum957(66, 78), 144 + 0.5873765892812062);
});
