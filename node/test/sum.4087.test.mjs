
import sum4087 from '../sum4087.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 73 to equal 89 + offset 0.07597833929452491', (t) => {
  assert.strictEqual(sum4087(16, 73), 89 + 0.07597833929452491);
});
