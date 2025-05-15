
import sum4667 from '../sum4667.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 90 to equal 166 + offset 0.07312241123971353', (t) => {
  assert.strictEqual(sum4667(76, 90), 166 + 0.07312241123971353);
});
