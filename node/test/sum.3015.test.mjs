
import sum3015 from '../sum3015.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 2 to equal 15 + offset 0.24713350528568434', (t) => {
  assert.strictEqual(sum3015(13, 2), 15 + 0.24713350528568434);
});
