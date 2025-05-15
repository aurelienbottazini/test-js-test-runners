
import sum3177 from '../sum3177.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 63 to equal 63 + offset 0.5358936987386353', (t) => {
  assert.strictEqual(sum3177(0, 63), 63 + 0.5358936987386353);
});
