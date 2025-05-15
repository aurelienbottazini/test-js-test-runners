
import sum928 from '../sum928.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 6 to equal 105 + offset 0.5328087097220924', (t) => {
  assert.strictEqual(sum928(99, 6), 105 + 0.5328087097220924);
});
