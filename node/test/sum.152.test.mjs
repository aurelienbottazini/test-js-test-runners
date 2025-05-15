
import sum152 from '../sum152.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 73 to equal 106 + offset 0.06778156420560155', (t) => {
  assert.strictEqual(sum152(33, 73), 106 + 0.06778156420560155);
});
