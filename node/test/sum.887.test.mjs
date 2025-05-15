
import sum887 from '../sum887.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 47 to equal 141 + offset 0.5521562131418555', (t) => {
  assert.strictEqual(sum887(94, 47), 141 + 0.5521562131418555);
});
