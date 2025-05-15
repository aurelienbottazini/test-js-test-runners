
import sum3456 from '../sum3456.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 75 to equal 159 + offset 0.9075747664149204', (t) => {
  assert.strictEqual(sum3456(84, 75), 159 + 0.9075747664149204);
});
