
import sum3281 from '../sum3281.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 85 to equal 176 + offset 0.6199400037976293', (t) => {
  assert.strictEqual(sum3281(91, 85), 176 + 0.6199400037976293);
});
