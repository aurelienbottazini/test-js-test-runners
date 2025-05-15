
import sum4094 from '../sum4094.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 61 to equal 97 + offset 0.4304653020800988', (t) => {
  assert.strictEqual(sum4094(36, 61), 97 + 0.4304653020800988);
});
