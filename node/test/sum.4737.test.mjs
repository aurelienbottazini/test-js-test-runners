
import sum4737 from '../sum4737.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 22 to equal 112 + offset 0.37797960457384516', (t) => {
  assert.strictEqual(sum4737(90, 22), 112 + 0.37797960457384516);
});
