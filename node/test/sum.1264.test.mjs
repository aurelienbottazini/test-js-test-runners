
import sum1264 from '../sum1264.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 57 to equal 98 + offset 0.5551124164370983', (t) => {
  assert.strictEqual(sum1264(41, 57), 98 + 0.5551124164370983);
});
