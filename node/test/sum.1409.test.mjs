
import sum1409 from '../sum1409.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 74 to equal 116 + offset 0.6291020464892166', (t) => {
  assert.strictEqual(sum1409(42, 74), 116 + 0.6291020464892166);
});
