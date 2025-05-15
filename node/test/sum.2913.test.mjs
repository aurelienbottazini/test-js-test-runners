
import sum2913 from '../sum2913.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 76 to equal 114 + offset 0.22154481509093138', (t) => {
  assert.strictEqual(sum2913(38, 76), 114 + 0.22154481509093138);
});
