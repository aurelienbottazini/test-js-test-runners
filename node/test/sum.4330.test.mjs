
import sum4330 from '../sum4330.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 77 to equal 154 + offset 0.8991225831241274', (t) => {
  assert.strictEqual(sum4330(77, 77), 154 + 0.8991225831241274);
});
