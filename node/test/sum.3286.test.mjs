
import sum3286 from '../sum3286.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 63 to equal 154 + offset 0.21708601695446128', (t) => {
  assert.strictEqual(sum3286(91, 63), 154 + 0.21708601695446128);
});
