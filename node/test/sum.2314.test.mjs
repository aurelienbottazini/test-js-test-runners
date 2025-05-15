
import sum2314 from '../sum2314.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 62 to equal 102 + offset 0.6174818752366834', (t) => {
  assert.strictEqual(sum2314(40, 62), 102 + 0.6174818752366834);
});
