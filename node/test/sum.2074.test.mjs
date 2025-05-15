
import sum2074 from '../sum2074.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 8 to equal 41 + offset 0.1470192506357193', (t) => {
  assert.strictEqual(sum2074(33, 8), 41 + 0.1470192506357193);
});
