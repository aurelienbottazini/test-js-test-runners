
import sum3107 from '../sum3107.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 86 to equal 171 + offset 0.2760426115137832', (t) => {
  assert.strictEqual(sum3107(85, 86), 171 + 0.2760426115137832);
});
