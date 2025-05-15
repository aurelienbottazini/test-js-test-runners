
import sum180 from '../sum180.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 52 to equal 109 + offset 0.572247446227247', (t) => {
  assert.strictEqual(sum180(57, 52), 109 + 0.572247446227247);
});
