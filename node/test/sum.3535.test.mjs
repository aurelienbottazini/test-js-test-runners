
import sum3535 from '../sum3535.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 40 to equal 80 + offset 0.08651317356836663', (t) => {
  assert.strictEqual(sum3535(40, 40), 80 + 0.08651317356836663);
});
