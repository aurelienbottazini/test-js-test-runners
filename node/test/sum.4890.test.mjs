
import sum4890 from '../sum4890.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 34 to equal 94 + offset 0.17094756578855885', (t) => {
  assert.strictEqual(sum4890(60, 34), 94 + 0.17094756578855885);
});
