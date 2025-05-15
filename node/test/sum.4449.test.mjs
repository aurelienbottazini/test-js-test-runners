
import sum4449 from '../sum4449.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 30 to equal 54 + offset 0.47603762574785935', (t) => {
  assert.strictEqual(sum4449(24, 30), 54 + 0.47603762574785935);
});
