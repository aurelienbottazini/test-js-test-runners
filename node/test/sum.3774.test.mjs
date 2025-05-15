
import sum3774 from '../sum3774.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 68 to equal 139 + offset 0.08504045610188082', (t) => {
  assert.strictEqual(sum3774(71, 68), 139 + 0.08504045610188082);
});
