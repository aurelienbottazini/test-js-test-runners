
import sum882 from '../sum882.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 42 to equal 116 + offset 0.004994848281647979', (t) => {
  assert.strictEqual(sum882(74, 42), 116 + 0.004994848281647979);
});
