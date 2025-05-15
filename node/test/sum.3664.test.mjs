
import sum3664 from '../sum3664.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 85 to equal 152 + offset 0.6584131566115011', (t) => {
  assert.strictEqual(sum3664(67, 85), 152 + 0.6584131566115011);
});
