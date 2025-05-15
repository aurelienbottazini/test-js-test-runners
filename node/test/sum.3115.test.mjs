
import sum3115 from '../sum3115.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 65 to equal 90 + offset 0.6138941626180682', (t) => {
  assert.strictEqual(sum3115(25, 65), 90 + 0.6138941626180682);
});
