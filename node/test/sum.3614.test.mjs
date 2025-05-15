
import sum3614 from '../sum3614.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 54 to equal 132 + offset 0.9323002897979215', (t) => {
  assert.strictEqual(sum3614(78, 54), 132 + 0.9323002897979215);
});
