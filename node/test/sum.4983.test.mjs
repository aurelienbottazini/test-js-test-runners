
import sum4983 from '../sum4983.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 32 to equal 35 + offset 0.527895910903562', (t) => {
  assert.strictEqual(sum4983(3, 32), 35 + 0.527895910903562);
});
