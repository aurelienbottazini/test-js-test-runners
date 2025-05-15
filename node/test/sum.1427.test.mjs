
import sum1427 from '../sum1427.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 43 to equal 44 + offset 0.40297174992778606', (t) => {
  assert.strictEqual(sum1427(1, 43), 44 + 0.40297174992778606);
});
