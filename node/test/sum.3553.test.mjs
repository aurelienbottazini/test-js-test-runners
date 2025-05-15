
import sum3553 from '../sum3553.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 87 to equal 136 + offset 0.819492869114801', (t) => {
  assert.strictEqual(sum3553(49, 87), 136 + 0.819492869114801);
});
