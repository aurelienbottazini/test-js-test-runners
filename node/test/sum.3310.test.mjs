
import sum3310 from '../sum3310.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 85 to equal 139 + offset 0.5622136411445215', (t) => {
  assert.strictEqual(sum3310(54, 85), 139 + 0.5622136411445215);
});
