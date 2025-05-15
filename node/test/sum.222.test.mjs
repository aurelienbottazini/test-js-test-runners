
import sum222 from '../sum222.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 74 to equal 165 + offset 0.09199407724071607', (t) => {
  assert.strictEqual(sum222(91, 74), 165 + 0.09199407724071607);
});
